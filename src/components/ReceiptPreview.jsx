function ReceiptPreview({ file }) {
  if (!file) {
    return null;
  }

  return (
    <div className="mt-6 w-full rounded-2xl border border-[#e8ddd6] bg-white p-5">
      <h2 className="font-serif text-2xl text-[#241c18]">
        Receipt Preview
      </h2>

      <div className="mt-4 rounded-xl bg-[#fffaf7] p-3">
        <img
          src={URL.createObjectURL(file)}
          alt="Receipt"
          className="mx-auto max-h-96 w-full object-contain"
        />
      </div>

      <p className="mt-3 text-sm text-[#766a63]">
        {file.name}
      </p>
    </div>
  );
}

export default ReceiptPreview;