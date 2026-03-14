import React, { useState } from "react";
import axios from "axios";

function App() {

  const [reconciliationInput, setReconciliationInput] = useState("");
  const [reconciliationResponse, setReconciliationResponse] = useState("");

  const [medicationInput, setMedicationInput] = useState("");
  const [medicationResponse, setMedicationResponse] = useState("");

  const [dataQualityInput, setDataQualityInput] = useState("");
  const [dataQualityResponse, setDataQualityResponse] = useState("");

  const callReconciliation = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/reconciliation",
        JSON.parse(reconciliationInput),
        { headers: { "Content-Type": "application/json" } }
      );
      setReconciliationResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      setReconciliationResponse(error.toString());
    }
  };

  const callMedication = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/reconcile/medication",
        JSON.parse(medicationInput),
        { headers: { "Content-Type": "application/json" } }
      );
      setMedicationResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      setMedicationResponse(error.toString());
    }
  };

  const callDataQuality = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/validate/data-quality",
        JSON.parse(dataQualityInput),
        { headers: { "Content-Type": "application/json" } }
      );
      setDataQualityResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      setDataQualityResponse(error.toString());
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Clinical Data Reconciliation Engine</h1>

      <h2>Patient Reconciliation</h2>
      <textarea
        rows="10"
        cols="80"
        placeholder="Paste Reconciliation JSON"
        value={reconciliationInput}
        onChange={(e) => setReconciliationInput(e.target.value)}
      />
      <br />
      <button onClick={callReconciliation}>Run Reconciliation</button>

      <pre>{reconciliationResponse}</pre>

      <hr />

      <h2>Medication Reconciliation</h2>
      <textarea
        rows="10"
        cols="80"
        placeholder="Paste Medication JSON"
        value={medicationInput}
        onChange={(e) => setMedicationInput(e.target.value)}
      />
      <br />
      <button onClick={callMedication}>Run Medication Reconciliation</button>

      <pre>{medicationResponse}</pre>

      <hr />

      <h2>Data Quality Validation</h2>
      <textarea
        rows="10"
        cols="80"
        placeholder="Paste Data Quality JSON"
        value={dataQualityInput}
        onChange={(e) => setDataQualityInput(e.target.value)}
      />
      <br />
      <button onClick={callDataQuality}>Run Data Quality Check</button>

      <pre>{dataQualityResponse}</pre>
    </div>
  );
}

export default App;