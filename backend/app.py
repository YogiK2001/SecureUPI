from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd  # Import pandas
from sklearn.ensemble import RandomForestClassifier  # Import necessary classes
from sklearn.tree import DecisionTreeClassifier

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the model
model = joblib.load('best_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Define the expected feature names
        feature_names = ['type', 'amount', 'oldbalanceOrg', 'newbalanceOrig', 'oldbalanceDest', 'newbalanceDest']

        # Extract features from input data
        transaction_data = [[
            data.get('type'),
            data.get('amount'),
            data.get('oldbalanceOrg'),
            data.get('newbalanceOrig'),
            data.get('oldbalanceDest'),
            data.get('newbalanceDest')
        ]]

        # Convert to DataFrame
        new_data = pd.DataFrame(transaction_data, columns=feature_names)

        # Prediction using the model
        prediction = model.predict(new_data)

        # Output the result
        if prediction[0] == 1:
            result = 1
        else:
            result = 0

        probabilities = model.predict_proba(new_data)
        fraud_confidence = probabilities[0][1]  # Probability of fraud (class 1)

        HIGH_CONFIDENCE_THRESHOLD = 0.8
        MEDIUM_CONFIDENCE_THRESHOLD = 0.5

        # Recommendation logic
        if fraud_confidence > HIGH_CONFIDENCE_THRESHOLD:
            recommendation = "Fraudulent transaction detected. Immediate alert required!"
        elif MEDIUM_CONFIDENCE_THRESHOLD < fraud_confidence <= HIGH_CONFIDENCE_THRESHOLD:
            recommendation = "Suspicious transaction. Manual review recommended."
        else:
            recommendation = "Transaction seems legitimate."

        # Return the result as JSON
        return jsonify({
            'result': result,
            'fraud_confidence': f"{fraud_confidence:.8f}",
            'recommendation': recommendation
        })

    except Exception as e:
        # Return error message as JSON
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    print("Server is running on http://localhost:5000")
    app.run(debug=True)