function ReceiptUploader({ setFile }) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  //RECEIPT

  return (
    <div className="w-full rounded-2xl border border-[#e8ddd6] bg-white p-5">
      
      <h2 className="font-serif text-2xl text-[#241c18]">
        Upload Receipt
      </h2>

      <p className="mt-2 text-sm text-[#766a63]">
        Upload a receipt to extract its details automatically.
      </p>

      <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#e8ddd6] bg-[#fffaf7] px-5 py-10 text-center hover:bg-[#fdf5f0]">
        
        <div className="text-3xl">↑</div>

        <p className="mt-3 text-sm font-medium text-[#4a3325]">
          Choose a receipt
        </p>

        <p className="mt-1 text-xs text-[#9a918a]">
          JPG, PNG or PDF · Max 10MB
        </p>

        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
          className="hidden"
        />

      </label>

    </div>
  );
}

export default ReceiptUploader;