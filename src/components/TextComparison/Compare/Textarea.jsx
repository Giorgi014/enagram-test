export const Textarea = ({ value, highlight, placeholder, onChange }) => {
  return (
    <div className="textarea_wrapper">
      <pre className="highlight">{highlight || value}</pre>
      <textarea placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
