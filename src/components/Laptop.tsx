interface ComputerBrand {
  name: string;
  manufacturer: string;
  logo: string;
}

const computerBrands: ComputerBrand[] = [
  { name: "Acer", manufacturer: "Acer America Corp.", logo: "https://example.com/acer-logo.png" },
  { name: "Gateway", manufacturer: "Acer America Corp.", logo: "https://example.com/gateway-logo.png" },
  { name: "Kindle Fire", manufacturer: "Amazon Fulfillment Services", logo: "https://example.com/kindle-logo.png" },
  { name: "Kindle", manufacturer: "Amazon Fulfillment Services", logo: "https://example.com/kindle-logo.png" },
  { name: "Apple", manufacturer: "Apple, Inc.", logo: "https://example.com/apple-logo.png" },
  { name: "ASUS", manufacturer: "ASUS Computer International", logo: "https://example.com/asus-logo.png" },
  { name: "Nexus ASUS", manufacturer: "ASUS Computer International", logo: "https://example.com/asus-logo.png" },
  { name: "Craig", manufacturer: "Craig Electronics, Inc.", logo: "https://example.com/craig-logo.png" },
  { name: "Curtis", manufacturer: "Curtis International Ltd.", logo: "https://example.com/curtis-logo.png" },
  { name: "Proscan", manufacturer: "Curtis International Ltd.", logo: "https://example.com/proscan-logo.png" },
  { name: "Cyberpowerpc", manufacturer: "Cyberpower, Inc.", logo: "https://example.com/cyberpower-logo.png" },
  { name: "SYBER", manufacturer: "Cyberpower, Inc.", logo: "https://example.com/syber-logo.png" },
  { name: "Dell", manufacturer: "Dell Marketing LP", logo: "https://example.com/dell-logo.png" },
  { name: "Alienware", manufacturer: "Dell Marketing LP", logo: "https://example.com/alienware-logo.png" },
  { name: "Zeki", manufacturer: "Digital Products International, Inc.", logo: "https://example.com/zeki-logo.png" },
  { name: "Dynabook", manufacturer: "Dynabook Americas, Inc.", logo: "https://example.com/dynabook-logo.png" },
  { name: "Tecra", manufacturer: "Dynabook Americas, Inc.", logo: "https://example.com/tecra-logo.png" },
  { name: "Portege", manufacturer: "Dynabook Americas, Inc.", logo: "https://example.com/portege-logo.png" },
  { name: "Elo", manufacturer: "Elo Touch Solutions, Inc.", logo: "https://example.com/elo-logo.png" },
  { name: "Elo Touch Solutions", manufacturer: "Elo Touch Solutions, Inc.", logo: "https://example.com/elo-logo.png" },
  { name: "Elo Touch Systems", manufacturer: "Elo Touch Solutions, Inc.", logo: "https://example.com/elo-logo.png" },
  { name: "Fujitsu LIFEBOOK", manufacturer: "Fujitsu America, Inc.", logo: "https://example.com/fujitsu-logo.png" },
  { name: "Fujitsu STYLISTIC", manufacturer: "Fujitsu America, Inc.", logo: "https://example.com/fujitsu-logo.png" },
  { name: "Google", manufacturer: "Google, Inc.", logo: "https://example.com/google-logo.png" },
  { name: "Huawei", manufacturer: "Huawei Device USA, Inc.", logo: "https://example.com/huawei-logo.png" },
  { name: "iBUYPOWER", manufacturer: "iBUYPOWER, Inc.", logo: "https://example.com/ibuypower-logo.png" },
  { name: "InFocus", manufacturer: "InFocus Corporation", logo: "https://example.com/infocus-logo.png" },
  { name: "Intel", manufacturer: "Intel Corporation", logo: "https://example.com/intel-logo.png" },
  { name: "Powerspec", manufacturer: "IPSG/Microcenter/Microelectronics", logo: "https://example.com/powerspec-logo.png" },
  { name: "Winbook", manufacturer: "IPSG/Microcenter/Microelectronics", logo: "https://example.com/winbook-logo.png" },
  { name: "Kurio Xtreme 2 SE", manufacturer: "Kidz Delight, Ltd.", logo: "https://example.com/kurio-logo.png" },
  { name: "Kurio Smart", manufacturer: "Kidz Delight, Ltd.", logo: "https://example.com/kurio-logo.png" },
  { name: "Next", manufacturer: "Kidz Delight, Ltd.", logo: "https://example.com/next-logo.png" },
  { name: "Lenovo", manufacturer: "Lenovo Global Technology", logo: "https://example.com/lenovo-logo.png" },
  { name: "Medion", manufacturer: "Lenovo Global Technology", logo: "https://example.com/medion-logo.png" },
  { name: "Microsoft", manufacturer: "Microsoft Corporation", logo: "https://example.com/microsoft-logo.png" },
  { name: "Motorola", manufacturer: "Motorola Mobility, LLC", logo: "https://example.com/motorola-logo.png" },
  { name: "MSI", manufacturer: "MSI Computer Corporation", logo: "https://example.com/msi-logo.png" },
  { name: "Naxa", manufacturer: "Naxa Electronics, Inc.", logo: "https://example.com/naxa-logo.png" },
  { name: "Nook", manufacturer: "Nook Digital, LLC", logo: "https://example.com/nook-logo.png" },
  { name: "Shield", manufacturer: "NVIDIA Corporation", logo: "https://example.com/nvidia-logo.png" },
  { name: "Polaroid", manufacturer: "PLR IP Holdings, LLC", logo: "https://example.com/polaroid-logo.png" },
  { name: "Premio", manufacturer: "Premio, Inc.", logo: "https://example.com/premio-logo.png" },
  { name: "Kobo", manufacturer: "Rakuten Kobo, Inc.", logo: "https://example.com/kobo-logo.png" },
  { name: "Razer", manufacturer: "Razer, Inc.", logo: "https://example.com/razer-logo.png" },
  { name: "Ematic", manufacturer: "Shaghal, Ltd.", logo: "https://example.com/ematic-logo.png" },
  { name: "Alcatel one touch", manufacturer: "TCT Mobile, Inc.", logo: "https://example.com/alcatel-logo.png" },
  { name: "Alcatel", manufacturer: "TCT Mobile, Inc.", logo: "https://example.com/alcatel-logo.png" },
  { name: "TCL", manufacturer: "TCT Mobile, Inc.", logo: "https://example.com/tcl-logo.png" },
  { name: "NuVision", manufacturer: "TMax Digital", logo: "https://example.com/nuvision-logo.png" },
  { name: "Toshiba", manufacturer: "Toshiba America Information Systems, Inc.", logo: "https://example.com/toshiba-logo.png" },
  { name: "VAIO", manufacturer: "Trans Cosmos America, Inc.", logo: "https://example.com/vaio-logo.png" },
  { name: "Pro12", manufacturer: "Venturer Electronics, Inc.", logo: "https://example.com/pro12-logo.png" },
  { name: "RCA", manufacturer: "Venturer Electronics, Inc.", logo: "https://example.com/rca-logo.png" },
  { name: "Verizon Ellipsis", manufacturer: "Verizon Wireless/Cellco Partnership", logo: "https://example.com/verizon-logo.png" },
  { name: "Verizon GizmoTab", manufacturer: "Verizon Wireless/Cellco Partnership", logo: "https://example.com/verizon-logo.png" },
  { name: "Vtech", manufacturer: "Vtech Electronics North America, LLC", logo: "https://example.com/vtech-logo.png" },
  { name: "LeapFrog", manufacturer: "Vtech Electronics North America, LLC", logo: "https://example.com/leapfrog-logo.png" },
  { name: "Wacom", manufacturer: "Wacom Technology Corporation", logo: "https://example.com/wacom-logo.png" },
  { name: "ZTE", manufacturer: "ZTE USA, Inc.", logo: "https://example.com/zte-logo.png" }
];

function Laptop() {

  return (
    <>
      <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Computer Brands</h2>
      <div className="grid grid-cols-3 gap-4">
        {computerBrands.map((brand, index) => (
          <div 
            key={index} 
            className="border p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo`} 
              className="w-24 h-24 mb-2"
            />
            <h3 className="font-semibold">{brand.name}</h3>
            <p className="text-gray-600">Manufacturer: {brand.manufacturer}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Laptop
