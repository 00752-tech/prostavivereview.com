"use client";

const AFFILIATE_URL = 'https://89be9ug1o83v3s3hwa5f1dbuct.hop.clickbank.net/?&traffic_source=pros_review'

function handleCTAClick(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  window.location.href = AFFILIATE_URL
}

export default function VSLClient() {
  return (
    <>
      {/* --- ALL YOUR VSL LANDING PAGE CONTENT GOES HERE --- */}
      {/* For brevity, use the full VSL content from previous answers... */}
      {/* ... */}
      {/* Example CTA Button */}
      <button
        onClick={handleCTAClick}
        className="inline-block bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-blue-800 transition cursor-pointer"
      >
        YES! I Want to Reclaim My Prostate Health & Vitality!
      </button>
      {/* ...rest of your VSL content... */}
    </>
  )
}
