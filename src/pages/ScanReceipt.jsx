import { useState } from "react";
import ReceiptUploader from "../components/ReceiptUploader";
import ReceiptPreview from "../components/ReceiptPreview";
import ReceiptReview from "../components/ReceiptReview";

function ScanReceipt() {
  const [file, setFile] = useState(null);

  return (
    <div className="min-h-screen bg-[#fffaf7] px-4 py-6">

      <div className="mx-auto max-w-6xl">

        <h1 className="font-serif text-3xl font-semibold text-[#241c18]">
          Scan Receipt
        </h1>

        <p className="mt-2 text-sm text-[#766a63]">
          Upload your receipt and review the extracted details.
        </p>

        {/* Main section */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Upload + Preview */}
          <div className="space-y-6 lg:col-span-2">

            <ReceiptUploader setFile={setFile} />

            <ReceiptPreview file={file} />

          </div>

          {/* Review */}
          {file && (
            <div>
              <ReceiptReview file={file} />
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default ScanReceipt;