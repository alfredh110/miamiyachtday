import React, { useState } from "react";

// Validation function
function validate(form) {
  const errors = {};
  if (!form.yachtName) errors.yachtName = "Yacht Name is required";
  if (!form.ownerName) errors.ownerName = "Owner Name is required";
  if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = "Valid Email is required";
  if (!form.phone) errors.phone = "Phone is required";
  if (!form.length || isNaN(form.length) || Number(form.length) <= 0) errors.length = "Length is required";
  if (!form.guests || isNaN(form.guests) || Number(form.guests) <= 0) errors.guests = "Max Guests is required";
  if (!form.description) errors.description = "Description is required";
  if (!form.photo) errors.photo = "Photo is required";
  return errors;
}

// Reusable input with error
function Field({ label, value, onChange, error, ...props }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label>{label}</label>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: "100%", padding: "7px 10px", borderRadius: 6,
          border: "1px solid #314164", marginTop: 4, fontSize: 15,
          background: "#1A2231", color: "#fff"
        }}
        {...props}
      />
      {error && <div style={{ color: "#ED5B68", marginTop: 4 }}>{error}</div>}
    </div>
  );
}

export function EditModal({ listing, onSave, onCancel }) {
  const [form, setForm] = useState({ ...listing });
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [errors, setErrors] = useState({});

  const update = (key, value) => setForm(f => ({ ...f, [key]: value }));

  const handleSave = () => {
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) onSave(form);
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(30,40,56,0.93)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
    }}>
      <div style={{ minWidth: 350, maxWidth: 420, background: "#232C3B", padding: 32, borderRadius: 12, color: "#fff" }}>
        <h2 style={{ color: "#5EE6E6", marginBottom: 18 }}>Edit Listing</h2>
        <Field label="Yacht Name" value={form.yachtName} onChange={v => update("yachtName", v)} error={errors.yachtName} />
        <Field label="Owner Name" value={form.ownerName} onChange={v => update("ownerName", v)} error={errors.ownerName} />
        <Field label="Email" value={form.email} onChange={v => update("email", v)} error={errors.email} />
        <Field label="Phone" value={form.phone} onChange={v => update("phone", v)} error={errors.phone} />
        <Field label="Length (ft)" type="number" value={form.length} onChange={v => update("length", v)} error={errors.length} />
        <Field label="Max Guests" type="number" value={form.guests} onChange={v => update("guests", v)} error={errors.guests} />
        <div style={{ marginBottom: 10 }}>
          <label>Description</label>
          <textarea
            value={form.description}
            onChange={e => update("description", e.target.value)}
            style={{
              width: "100%", padding: "7px 10px", borderRadius: 6,
              border: "1px solid #314164", marginTop: 4, fontSize: 15,
              background: "#1A2231", color: "#fff", minHeight: 60
            }}
          />
          {errors.description && <div style={{ color: "#ED5B68", marginTop: 4 }}>{errors.description}</div>}
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Photo URL</label>
          <input
            value={form.photo ?? ""}
            onChange={e => update("photo", e.target.value)}
            style={{
              width: "100%", padding: "7px 10px", borderRadius: 6,
              border: "1px solid #314164", marginTop: 4, fontSize: 15,
              background: "#1A2231", color: "#fff"
            }}
            placeholder="Or upload below"
          />
          <input
            type="file"
            accept="image/*"
            style={{ marginTop: 8 }}
            disabled={uploading}
            onChange={async e => {
              const file = e.target.files[0];
              if (!file) return;
              setUploading(true);
              setUploadError("");
              const formData = new FormData();
              formData.append("file", file);
              try {
                const res = await fetch("/api/upload", {
                  method: "POST",
                  body: formData,
                });
                const data = await res.json();
                if (data.url) {
                  update("photo", data.url);
                } else {
                  setUploadError("Upload failed");
                }
              } catch (err) {
                setUploadError("Upload failed");
              }
              setUploading(false);
            }}
          />
          {uploading && <div style={{ color: "#5EE6E6", marginTop: 6 }}>Uploading...</div>}
          {uploadError && <div style={{ color: "#ED5B68", marginTop: 6 }}>{uploadError}</div>}
          {errors.photo && <div style={{ color: "#ED5B68", marginTop: 4 }}>{errors.photo}</div>}
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <button onClick={handleSave} style={{ ...saveBtnStyle }}>Save</button>
          <button onClick={onCancel} style={{ ...cancelBtnStyle }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export function CreateModal({ onSave, onCancel }) {
  const [form, setForm] = useState({
    yachtName: "", ownerName: "", email: "", phone: "",
    length: "", guests: "", description: "", photo: "", approved: false
  });
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [errors, setErrors] = useState({});

  const update = (key, value) => setForm(f => ({ ...f, [key]: value }));

  const handleSave = () => {
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) onSave(form);
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(30,40,56,0.93)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
    }}>
      <div style={{ minWidth: 350, maxWidth: 420, background: "#232C3B", padding: 32, borderRadius: 12, color: "#fff" }}>
        <h2 style={{ color: "#5EE6E6", marginBottom: 18 }}>Create New Listing</h2>
        <Field label="Yacht Name" value={form.yachtName} onChange={v => update("yachtName", v)} error={errors.yachtName} />
        <Field label="Owner Name" value={form.ownerName} onChange={v => update("ownerName", v)} error={errors.ownerName} />
        <Field label="Email" value={form.email} onChange={v => update("email", v)} error={errors.email} />
        <Field label="Phone" value={form.phone} onChange={v => update("phone", v)} error={errors.phone} />
        <Field label="Length (ft)" type="number" value={form.length} onChange={v => update("length", v)} error={errors.length} />
        <Field label="Max Guests" type="number" value={form.guests} onChange={v => update("guests", v)} error={errors.guests} />
        <div style={{ marginBottom: 10 }}>
          <label>Description</label>
          <textarea
            value={form.description}
            onChange={e => update("description", e.target.value)}
            style={{
              width: "100%", padding: "7px 10px", borderRadius: 6,
              border: "1px solid #314164", marginTop: 4, fontSize: 15,
              background: "#1A2231", color: "#fff", minHeight: 60
            }}
          />
          {errors.description && <div style={{ color: "#ED5B68", marginTop: 4 }}>{errors.description}</div>}
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Photo URL</label>
          <input
            value={form.photo ?? ""}
            onChange={e => update("photo", e.target.value)}
            style={{
              width: "100%", padding: "7px 10px", borderRadius: 6,
              border: "1px solid #314164", marginTop: 4, fontSize: 15,
              background: "#1A2231", color: "#fff"
            }}
            placeholder="Or upload below"
          />
          <input
            type="file"
            accept="image/*"
            style={{ marginTop: 8 }}
            disabled={uploading}
            onChange={async e => {
              const file = e.target.files[0];
              if (!file) return;
              setUploading(true);
              setUploadError("");
              const formData = new FormData();
              formData.append("file", file);
              try {
                const res = await fetch("/api/upload", {
                  method: "POST",
                  body: formData,
                });
                const data = await res.json();
                if (data.url) {
                  update("photo", data.url);
                } else {
                  setUploadError("Upload failed");
                }
              } catch (err) {
                setUploadError("Upload failed");
              }
              setUploading(false);
            }}
          />
          {uploading && <div style={{ color: "#5EE6E6", marginTop: 6 }}>Uploading...</div>}
          {uploadError && <div style={{ color: "#ED5B68", marginTop: 6 }}>{uploadError}</div>}
          {errors.photo && <div style={{ color: "#ED5B68", marginTop: 4 }}>{errors.photo}</div>}
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <button onClick={handleSave} style={{ ...saveBtnStyle }}>Save</button>
          <button onClick={onCancel} style={{ ...cancelBtnStyle }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

const saveBtnStyle = {
  width: "100%",
  padding: "7px 10px",
  borderRadius: 6,
  border: "none",
  background: "#46E6A6",
  color: "#222",
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer"
};
const cancelBtnStyle = {
  width: "100%",
  padding: "7px 10px",
  borderRadius: 6,
  border: "none",
  background: "#ED5B68",
  color: "#fff",
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer"
};
