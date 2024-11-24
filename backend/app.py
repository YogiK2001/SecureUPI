from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the model
model = joblib.load('best_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Get JSON data from React
        features = data.get('features', [])
        
        if len(features) != 6:  # Ensure 6 features are provided
            return jsonify({"error": "Exactly 6 features are required"}), 400
        
        # Convert features to a NumPy array
        final_features = [np.array(features)]
        prediction = model.predict(final_features)
        output = int(prediction[0]) 

        return jsonify({"prediction": output})  # Send back the prediction
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
