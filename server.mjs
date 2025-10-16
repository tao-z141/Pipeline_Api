import express from 'express';
import dotenv from 'dotenv';
import { AllFunctions } from './pipeline.mjs';

dotenv.config();
const app = express();
const PORT = 3000;

app.get('/profile', async (req, res) => {
  try {
    
    let data = await AllFunctions();

    data.darkData = {
      ibanCountry: data.iban.slice(0, 2) === 'FR' ? 'France' : 'Autre',                        
      userNameLength: data.user.name.length,     
      registrationDuration: data.user.registered.age,           
      ageCategory: data.user.dob.age < 18 ? 'Jeune' :
      data.user.dob.age < 60 ? 'Adulte' : 'Senior',                
    };

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
