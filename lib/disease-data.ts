export type Severity = "critical" | "moderate" | "mild"

export interface DiseaseInfo {
  description: string
  treatments: string
  severity: Severity
  urgency: string
}

export const diseaseData: Record<string, DiseaseInfo> = {
  Jaundice: {
    description: `Jaundice is a condition characterized by the yellowing of the skin, sclera (whites of the eyes), and mucous membranes. It occurs when there is a high level of bilirubin in the bloodstream.

Causes include:
- Liver disease (cirrhosis, hepatitis)
- Biliary obstruction
- Hemolysis (destruction of red blood cells)
- Pancreatic cancer
- Gallstones`,
    treatments: `Treatment depends on underlying cause:
- For viral hepatitis: Rest, fluids, supportive care
- For biliary obstruction: ERCP or surgery
- For hemolytic anemia: Blood transfusion, steroids
- Liver disease: Treatment of underlying condition
- Nutritional support and bilirubin level monitoring`,
    severity: "moderate",
    urgency: "Doctor checkup needed within 24-48 hours",
  },
  Alzheimers: {
    description: `Alzheimer's disease is a progressive neurodegenerative disorder affecting memory, thinking, and behavior. It is the most common cause of dementia.

Key features:
- Progressive memory loss, especially short-term
- Difficulty with familiar tasks
- Personality and behavioral changes
- Disorientation to time and place
- Slow progression over years`,
    treatments: `Management options:
- Cholinesterase inhibitors (Donepezil, Rivastigmine)
- NMDA receptor antagonists (Memantine)
- Cognitive stimulation and memory training
- Behavioral management strategies
- Support groups for caregivers
- Regular monitoring and care planning`,
    severity: "moderate",
    urgency: "Specialist consultation recommended",
  },
  Arthritis: {
    description: `Arthritis is inflammation of one or more joints causing pain, stiffness, and swelling. Over 100 types exist, commonly osteoarthritis and rheumatoid arthritis.

Osteoarthritis: Results from wear and tear, common in older adults
Rheumatoid Arthritis: Autoimmune condition attacking joint tissues`,
    treatments: `Treatment approaches:
- NSAIDs and corticosteroids
- Disease-modifying antirheumatic drugs (DMARDs)
- Biologics and targeted therapies
- Physical therapy and exercise
- Heat and cold therapy
- In severe cases: Joint replacement surgery`,
    severity: "mild",
    urgency: "Can be managed with home treatment and doctor consultation",
  },
  Tuberculosis: {
    description: `Tuberculosis (TB) is a serious infectious disease caused by Mycobacterium tuberculosis, primarily affecting the lungs.

Types:
- Latent TB: Infection without symptoms
- Active TB: Disease with symptoms (infectious)

Transmission: Airborne droplets from coughing/sneezing`,
    treatments: `TB treatment (6+ months):
- First-line antibiotics: Isoniazid, Rifampin, Pyrazinamide, Ethambutol
- Directly observed therapy (DOT) recommended
- Vitamin B6 to prevent neuropathy
- Regular monitoring for response and side effects
- Contact tracing and preventive therapy
- Nutritional support during treatment`,
    severity: "critical",
    urgency: "Immediate medical attention and hospitalization may be required",
  },
  Asthma: {
    description: `Asthma is a chronic inflammatory disease of the airways with recurrent symptoms, reversible airflow obstruction, and bronchospasm.

Symptoms:
- Wheezing and shortness of breath
- Chest tightness and cough
- Symptoms often worsen at night or with exertion

Triggers: Allergens, exercise, cold air, stress, infections`,
    treatments: `Asthma management:
- Quick-relief: Short-acting beta-2 agonists (albuterol)
- Controller: Inhaled corticosteroids, long-acting beta-agonists
- Leukotriene modifiers
- Allergen avoidance
- Asthma action plan and peak flow monitoring
- Regular follow-up and medication adjustment`,
    severity: "moderate",
    urgency: "Doctor checkup needed for proper management and medication",
  },
  Sinusitis: {
    description: `Sinusitis is inflammation of the sinus cavities, usually caused by viral or bacterial infection. Can be acute or chronic.

Characteristics:
- Nasal congestion and drainage
- Facial pressure and pain
- Headache and fever
- Cough and sore throat
- Often follows upper respiratory infections`,
    treatments: `Treatment approaches:
- Nasal decongestants and saline irrigation
- Antibiotics for bacterial infections
- Nasal corticosteroid sprays
- Antihistamines for allergies
- Mucolytics to thin secretions
- Humidification and rest
- In chronic cases: Nasal surgery`,
    severity: "mild",
    urgency: "Home remedies first; doctor if symptoms persist beyond 10 days",
  },
  Epilepsy: {
    description: `Epilepsy is a neurological disorder characterized by recurrent seizures. A seizure is a sudden, uncontrolled electrical discharge in the brain.

Types:
- Generalized: Involve entire brain (absence, tonic-clonic, atonic)
- Partial (focal): Begin in one brain area

Features: Recurrent unprovoked seizures, various manifestations`,
    treatments: `Epilepsy management:
- Antiepileptic drugs: Phenytoin, Valproate, Levetiracetam, Lamotrigine
- Ketogenic diet in certain cases
- Vagus nerve stimulation therapy
- Neurosurgery for drug-resistant epilepsy
- Seizure action plan and safety precautions
- Regular monitoring and medication adjustment`,
    severity: "critical",
    urgency: "Requires immediate medical attention and specialist care",
  },
  "Heart Disease": {
    description: `Heart disease encompasses various conditions affecting the heart and blood vessels including coronary artery disease, heart failure, arrhythmias, and valvular disease.

Risk Factors:
- High blood pressure and cholesterol
- Smoking and obesity
- Diabetes and family history
- Stress and sedentary lifestyle`,
    treatments: `Treatment varies by type:
- Medications: ACE inhibitors, beta-blockers, statins, antiplatelet agents
- Lifestyle modifications: Diet, exercise, smoking cessation
- Coronary angioplasty and stent placement
- Bypass surgery or valve repair/replacement
- Cardiac rehabilitation programs
- Regular monitoring with ECG and echocardiography`,
    severity: "critical",
    urgency: "Immediate emergency care required for acute symptoms",
  },
  Diabetes: {
    description: `Diabetes is a metabolic disease with high blood glucose due to inadequate insulin production or cellular resistance.

Types:
- Type 1: Autoimmune, pancreas doesn't produce insulin
- Type 2: Insulin resistance or insufficient production
- Gestational: Develops during pregnancy

Complications: Neuropathy, nephropathy, retinopathy, cardiovascular disease`,
    treatments: `Diabetes management:
- Insulin therapy (especially Type 1)
- Oral agents: Metformin, sulfonylureas, SGLT2 inhibitors
- GLP-1 receptor agonists
- Blood glucose monitoring and dietary management
- Regular exercise and weight management
- Blood pressure and cholesterol control
- Regular eye and foot examinations`,
    severity: "moderate",
    urgency: "Ongoing doctor management required for blood sugar control",
  },
  Glaucoma: {
    description: `Glaucoma is an eye disease with elevated intraocular pressure leading to optic nerve damage and progressive vision loss. Leading cause of irreversible blindness.

Types:
- Open-angle: Most common, gradual onset
- Angle-closure: Acute, requires emergency treatment
- Normal-tension: Low pressure but optic nerve damage`,
    treatments: `Treatment aims to lower intraocular pressure:
- Topical medications: Prostaglandin analogs, beta-blockers
- Oral carbonic anhydrase inhibitors
- Laser treatments: Trabeculoplasty, cycloablation
- Filtration surgery: Trabeculectomy, shunt implants
- Regular eye examinations and visual field testing
- Patient education on medication adherence`,
    severity: "critical",
    urgency: "Urgent ophthalmologist consultation required",
  },
  Hyperthyroidism: {
    description: `Hyperthyroidism is excessive thyroid hormone production (T3 and T4), leading to increased metabolism.

Common Causes:
- Graves' disease: Autoimmune condition
- Thyroiditis: Thyroid inflammation
- Toxic nodules: Autonomous thyroid tissue
- Excessive iodine intake

Symptoms:
- Increased heart rate and palpitations
- Tremor and anxiety
- Heat intolerance and sweating
- Weight loss despite increased appetite`,
    treatments: `Treatment options:
- Antithyroid medications: Propylthiouracil (PTU), Methimazole
- Beta-blockers for symptom management
- Radioactive iodine therapy
- Thyroidectomy (surgical removal)
- Regular thyroid function monitoring
- Management of complications
- Dietary iodine restriction`,
    severity: "moderate",
    urgency: "Doctor checkup needed for proper medication and monitoring",
  },
  "Heat Stroke": {
    description: `Heat stroke is a life-threatening emergency with core body temperature >40°C (104°F) and CNS dysfunction.

Types:
- Exertional: Related to physical activity
- Classic: Environmental exposure

Predisposing Factors:
- High temperature and humidity
- Strenuous physical activity
- Dehydration and reduced acclimatization`,
    treatments: `Immediate emergency treatment:
- Rapid cooling: Cold water immersion, ice packs
- Intravenous fluid replacement
- Vital signs and core temperature monitoring
- Complication management (muscle damage, kidney injury)
- Electrolyte correction
- ICU admission for monitoring
- Prevention education and acclimatization`,
    severity: "critical",
    urgency: "Call emergency services immediately - life-threatening condition",
  },
  Hypothermia: {
    description: `Hypothermia is a dangerous condition where core temperature drops below 35°C (95°F), impairing bodily functions.

Risk Factors:
- Prolonged cold exposure
- Cold water immersion
- Inadequate clothing
- Age extremes and chronic conditions
- Alcohol and drug use

Stages: Mild (shivering), Moderate (drowsiness), Severe (loss of consciousness)`,
    treatments: `Treatment includes:
- Passive external rewarming: Remove wet clothes, provide blankets
- Active external rewarming: Heat lamps, warm baths
- Active core rewarming: Warm IV fluids, heated oxygen
- Extracorporeal rewarming: ECMO for severe cases
- Cardiac monitoring and arrhythmia management
- Gradual rewarming to prevent afterdrop
- Management of underlying injuries`,
    severity: "critical",
    urgency: "Emergency medical care required immediately",
  },
  Bronchitis: {
    description: `Bronchitis is inflammation of the main airways (bronchi) in the lungs, usually caused by viral infection. Can be acute or chronic.

Symptoms:
- Persistent cough lasting 2-3 weeks
- Mucus production (clear, white, yellowish, or green)
- Fatigue and shortness of breath
- Mild fever and chills
- Chest discomfort`,
    treatments: `Treatment approaches:
- Rest and hydration
- Cough suppressants or expectorants
- Antibiotics if bacterial infection
- Bronchodilators for airway opening
- Humidification and steam inhalation
- Smoking cessation
- Follow-up if symptoms persist beyond 3 weeks`,
    severity: "mild",
    urgency: "Home care first; doctor if symptoms worsen",
  },
  Pneumonia: {
    description: `Pneumonia is inflammation of lung air sacs (alveoli) filled with fluid or pus, caused by bacterial, viral, or fungal infection.

Risk Factors:
- Recent respiratory infection
- Smoking
- Weakened immune system
- Age (very young or elderly)
- Chronic diseases`,
    treatments: `Treatment options:
- Antibiotics for bacterial pneumonia
- Antivirals for viral pneumonia
- Oxygen therapy if needed
- Cough medicine and pain relievers
- Rest and hydration
- Chest physiotherapy
- Hospitalization for severe cases`,
    severity: "moderate",
    urgency: "Doctor evaluation required within 24 hours",
  },
  Migraine: {
    description: `Migraine is a neurological condition with intense, debilitating headaches often accompanied by nausea, vomiting, and light sensitivity.

Characteristics:
- Severe throbbing pain, usually on one side
- Visual disturbances (aura) in some cases
- Sensitivity to light, sound, and smell
- Nausea and vomiting
- Episodes lasting 4-72 hours`,
    treatments: `Management options:
- Triptans and ergot derivatives for acute attacks
- NSAIDs for pain relief
- Antiemetics for nausea
- Preventive medications: Beta-blockers, antidepressants, anticonvulsants
- Lifestyle modifications and trigger avoidance
- Stress management and regular sleep
- Biofeedback and relaxation techniques`,
    severity: "mild",
    urgency: "Home treatment with pain relief; doctor if frequency increases",
  },
  Gastritis: {
    description: `Gastritis is inflammation of the stomach lining, usually caused by Helicobacter pylori bacteria, NSAIDs, or stress.

Symptoms:
- Abdominal pain or cramps
- Indigestion and bloating
- Nausea and vomiting
- Loss of appetite
- Dark, tarry stools in severe cases`,
    treatments: `Treatment approaches:
- Proton pump inhibitors to reduce stomach acid
- H2-receptor blockers
- Antibiotics if H. pylori positive
- Antacids for symptom relief
- Dietary modifications (bland foods)
- Avoid NSAIDs and alcohol
- Stress management
- Follow-up testing after treatment`,
    severity: "mild",
    urgency: "Home treatment with dietary changes; doctor if severe",
  },
  "Urinary Tract Infection": {
    description: `UTI is infection of the urinary system (urethra, bladder, or kidneys) by bacteria, usually E. coli.

Symptoms:
- Burning pain during urination
- Frequent urination
- Cloudy or bloody urine
- Lower abdominal or pelvic pain
- Fever and chills if kidney infection`,
    treatments: `Treatment options:
- Antibiotics: Nitrofurantoin, Trimethoprim-sulfamethoxazole, Fluoroquinolones
- Urinary analgesics for pain relief
- Hydration and frequent urination
- Cranberry supplements
- Avoid irritants (caffeine, alcohol, spicy food)
- Regular follow-up to confirm cure
- Prevention strategies (wiping, hydration)`,
    severity: "moderate",
    urgency: "Doctor evaluation within 24-48 hours recommended",
  },
  Anemia: {
    description: `Anemia is a condition with insufficient red blood cells or hemoglobin, reducing oxygen-carrying capacity.

Types:
- Iron-deficiency anemia: Most common
- Vitamin B12 deficiency anemia
- Hemolytic anemia: RBC destruction
- Aplastic anemia: Bone marrow failure

Symptoms: Fatigue, weakness, shortness of breath, dizziness`,
    treatments: `Treatment depends on type:
- Iron supplements for iron deficiency
- Vitamin B12 injections or supplements
- Blood transfusions in severe cases
- Treatment of underlying cause
- Dietary modifications (iron-rich foods)
- Regular blood count monitoring
- Management of concurrent conditions`,
    severity: "moderate",
    urgency: "Doctor evaluation required for diagnosis and treatment",
  },
  "Acute Bronchial Asthma": {
    description: `Acute bronchial asthma is a severe asthma attack with significant airway narrowing and breathing difficulty.

Acute Symptoms:
- Severe shortness of breath at rest
- Difficulty speaking in full sentences
- Anxiousness and panic
- Wheezing or silence in chest
- Cyanosis (blue lips/nails) in severe cases`,
    treatments: `Emergency treatment:
- Immediate oxygen therapy
- Short-acting bronchodilators (albuterol nebulizer)
- Corticosteroids (IV or oral)
- Epinephrine in life-threatening cases
- Theophylline or magnesium sulfate
- Hospitalization if no response in 1-2 hours
- ICU monitoring for severe cases`,
    severity: "critical",
    urgency: "Call emergency services immediately",
  },
  Hypertension: {
    description: `Hypertension is elevated blood pressure (≥130/80 mmHg), increasing risk of heart disease and stroke.

Risk Factors:
- Age and family history
- Obesity and sedentary lifestyle
- High sodium intake
- Alcohol consumption
- Chronic kidney disease
- Sleep apnea`,
    treatments: `Management options:
- Lifestyle modifications: DASH diet, exercise, weight loss
- Antihypertensive medications: ACE inhibitors, ARBs, beta-blockers, thiazide diuretics
- Sodium restriction
- Stress management and relaxation
- Regular blood pressure monitoring
- Management of comorbidities
- Smoking cessation`,
    severity: "moderate",
    urgency: "Doctor monitoring required for medication and control",
  },
  "Acute Myocardial Infarction": {
    description: `Acute MI (heart attack) is the death of heart muscle due to blocked blood supply, a medical emergency.

Warning Signs:
- Chest pain or pressure lasting >15 minutes
- Pain radiating to arm, neck, or jaw
- Shortness of breath
- Nausea, vomiting, and diaphoresis
- Dizziness and loss of consciousness in severe cases`,
    treatments: `Emergency treatment:
- Immediate emergency services call required
- Oxygen therapy and cardiac monitoring
- Aspirin and antiplatelet agents
- Thrombolytic therapy or primary angioplasty
- Nitroglycerin for pain relief
- Beta-blockers and ACE inhibitors
- Cardiac catheterization and coronary angiography
- Intensive care admission`,
    severity: "critical",
    urgency: "Call emergency services immediately - life-threatening",
  },
  Colitis: {
    description: `Colitis is inflammation of the colon, usually caused by infection (bacterial), inflammatory bowel disease, or ischemia.

Symptoms:
- Diarrhea, often bloody
- Abdominal cramps and pain
- Rectal pain and urgency
- Fever and chills
- Weight loss
- Dehydration in severe cases`,
    treatments: `Treatment depends on cause:
- Antibiotics for bacterial colitis
- Mesalamine and corticosteroids for IBD
- Anti-diarrheal agents
- Hydration and electrolyte replacement
- Dietary modifications (bland foods)
- IV fluids and blood transfusions if needed
- Severe cases may require hospitalization`,
    severity: "moderate",
    urgency: "Doctor evaluation required within 24 hours",
  },
  Meningitis: {
    description: `Meningitis is inflammation of protective membranes around brain and spinal cord, caused by viral, bacterial, or fungal infection. A medical emergency.

Symptoms:
- High fever and intense headache
- Stiff neck
- Sensitivity to light and sound
- Confusion and altered consciousness
- Rash in some cases
- Nausea and vomiting`,
    treatments: `Immediate emergency treatment:
- Lumbar puncture for diagnosis
- IV antibiotics (Ceftriaxone, Vancomycin)
- Antiviral medications if viral
- Supportive care and airway management
- ICU admission with continuous monitoring
- Treatment of complications
- Contact tracing and prophylaxis for close contacts`,
    severity: "critical",
    urgency: "Call emergency services immediately - life-threatening",
  },
  Dengue: {
    description: `Dengue fever is a mosquito-borne viral disease transmitted by Aedes aegypti mosquitoes, endemic in tropical regions.

Symptoms:
- High fever lasting 3-10 days
- Severe headache and body aches
- Joint pain ("breakbone fever")
- Rash appearing after fever
- Nausea and vomiting
- Mild bleeding (gum bleeding, nosebleed)`,
    treatments: `Supportive treatment:
- Rest and hydration (oral or IV fluids)
- Acetaminophen for pain (avoid NSAIDs)
- Platelet transfusion if severe thrombocytopenia
- Close monitoring for dengue hemorrhagic fever
- Daily blood count monitoring
- Hospitalization if severe
- Prevention through mosquito control`,
    severity: "moderate",
    urgency: "Doctor evaluation and blood tests required",
  },
  Malaria: {
    description: `Malaria is a parasitic disease transmitted by Anopheles mosquitoes, endemic in tropical and subtropical regions.

Symptoms:
- Cyclic high fever (patterns depend on parasite type)
- Chills and sweating
- Headache and body aches
- Nausea and vomiting
- Anemia and jaundice in severe cases
- Severe complications if untreated`,
    treatments: `Antimalarial therapy:
- Artemether-lumefantrine or artemisinin derivatives
- Chloroquine (where resistance low)
- Quinine for severe malaria
- Supportive care with hydration and transfusion
- Management of complications
- Close monitoring of parasitemia levels
- Prevention with antimalarial prophylaxis in endemic areas`,
    severity: "critical",
    urgency: "Immediate medical evaluation and treatment required",
  },
}
