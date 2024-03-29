const countryValue = () => {
  const countries = [
    {
      code: "US",
      name: "United States",
    },
    {
      code: "IN",
      name: "India",
    },
    {
      code: "FR",
      name: "France",
    },
    {
      code: "BR",
      name: "Brazil",
    },
    {
      code: "GB",
      name: "United Kingdom",
    },
    {
      code: "IT",
      name: "Italy",
    },
    {
      code: "ES",
      name: "Spain",
    },
    {
      code: "TR",
      name: "Turkey",
    },
    {
      code: "DE",
      name: "Germany",
    },
    {
      code: "CA",
      name: "Canada",
    },
    {
      code: "MX",
      name: "Mexico",
    },
    {
      code: "ID",
      name: "Indonesia",
    },
    {
      code: "AU",
      name: "Australia",
    },
    {
      code: "NL",
      name: "Netherlands",
    },
    {
      code: "PL",
      name: "Poland",
    },
    {
      code: "PH",
      name: "Philippines",
    },
    {
      code: "ZA",
      name: "South Africa",
    },
    {
      code: "CO",
      name: "Colombia",
    },
    {
      code: "AR",
      name: "Argentina",
    },
    {
      code: "CN",
      name: "China",
    },
    {
      code: "BE",
      name: "Belgium",
    },
    {
      code: "PT",
      name: "Portugal",
    },
    {
      code: "RU",
      name: "Russian Federation",
    },
    {
      code: "CZ",
      name: "Czech Republic",
    },
    {
      code: "MY",
      name: "Malaysia",
    },
    {
      code: "CL",
      name: "Chile",
    },
    {
      code: "NG",
      name: "Nigeria",
    },
    {
      code: "MA",
      name: "Morocco",
    },
    {
      code: "SE",
      name: "Sweden",
    },
    {
      code: "PK",
      name: "Pakistan",
    },
    {
      code: "PE",
      name: "Peru",
    },
    {
      code: "RO",
      name: "Romania",
    },
    {
      code: "CH",
      name: "Switzerland",
    },
    {
      code: "DZ",
      name: "Algeria",
    },
    {
      code: "SA",
      name: "Saudi Arabia",
    },
    {
      code: "VE",
      name: "Venezuela",
    },
    {
      code: "IR",
      name: "Iran, Islamic Republic of",
    },
    {
      code: "AE",
      name: "United Arab Emirates",
    },
    {
      code: "DK",
      name: "Denmark",
    },
    {
      code: "TH",
      name: "Thailand",
    },
    {
      code: "EG",
      name: "Egypt",
    },
    {
      code: "HU",
      name: "Hungary",
    },
    {
      code: "UA",
      name: "Ukraine",
    },
    {
      code: "GR",
      name: "Greece",
    },
    {
      code: "IE",
      name: "Ireland",
    },
    {
      code: "EC",
      name: "Ecuador",
    },
    {
      code: "KE",
      name: "Kenya",
    },
    {
      code: "TN",
      name: "Tunisia",
    },
    {
      code: "AT",
      name: "Austria",
    },
    {
      code: "JP",
      name: "Japan",
    },
    {
      code: "MQ",
      name: "Martinique",
    },
    {
      code: "NZ",
      name: "New Zealand",
    },
    {
      code: "BD",
      name: "Bangladesh",
    },
    {
      code: "VN",
      name: "Viet Nam",
    },
    {
      code: "FI",
      name: "Finland",
    },
    {
      code: "IL",
      name: "Israel",
    },
    {
      code: "HK",
      name: "Hong Kong",
    },
    {
      code: "GH",
      name: "Ghana",
    },
    {
      code: "CI",
      name: "Cote D'Ivoire",
    },
    {
      code: "RS",
      name: "Serbia",
    },
    {
      code: "SK",
      name: "Slovakia",
    },
    {
      code: "TW",
      name: "Taiwan, Province of China",
    },
    {
      code: "KR",
      name: "Korea, Republic of",
    },
    {
      code: "SN",
      name: "Senegal",
    },
    {
      code: "CM",
      name: "Cameroon",
    },
    {
      code: "LK",
      name: "Sri Lanka",
    },
    {
      code: "LB",
      name: "Lebanon",
    },
    {
      code: "CR",
      name: "Costa Rica",
    },
    {
      code: "NE",
      name: "Niger",
    },
    {
      code: "DO",
      name: "Dominican Republic",
    },
    {
      code: "BG",
      name: "Bulgaria",
    },
    {
      code: "HR",
      name: "Croatia",
    },
    {
      code: "AO",
      name: "Angola",
    },
    {
      code: "UY",
      name: "Uruguay",
    },
    {
      code: "GT",
      name: "Guatemala",
    },
    {
      code: "JO",
      name: "Jordan",
    },
    {
      code: "KW",
      name: "Kuwait",
    },
    {
      code: "UG",
      name: "Uganda",
    },
    {
      code: "BO",
      name: "Bolivia",
    },
    {
      code: "QA",
      name: "Qatar",
    },
    {
      code: "TZ",
      name: "Tanzania, United Republic of",
    },
    {
      code: "PA",
      name: "Panama",
    },
    {
      code: "PR",
      name: "Puerto Rico",
    },
    {
      code: "LT",
      name: "Lithuania",
    },
    {
      code: "SI",
      name: "Slovenia",
    },
    {
      code: "AL",
      name: "Albania",
    },
    {
      code: "BY",
      name: "Belarus",
    },
    {
      code: "ZW",
      name: "Zimbabwe",
    },
    {
      code: "KZ",
      name: "Kazakhstan",
    },
    {
      code: "NP",
      name: "Nepal",
    },
    {
      code: "AZ",
      name: "Azerbaijan",
    },
    {
      code: "IQ",
      name: "Iraq",
    },
    {
      code: "SG",
      name: "Singapore",
    },
    {
      code: "BA",
      name: "Bosnia and Herzegovina",
    },
    {
      code: "CD",
      name: "Congo, the Democratic Republic of the",
    },
    {
      code: "SV",
      name: "El Salvador",
    },
    {
      code: "CY",
      name: "Cyprus",
    },
    {
      code: "ET",
      name: "Ethiopia",
    },
    {
      code: "LV",
      name: "Latvia",
    },
    {
      code: "OM",
      name: "Oman",
    },
    {
      code: "PY",
      name: "Paraguay",
    },
    {
      code: "MZ",
      name: "Mozambique",
    },
    {
      code: "HN",
      name: "Honduras",
    },
    {
      code: "LU",
      name: "Luxembourg",
    },
    {
      code: "RE",
      name: "Reunion",
    },
    {
      code: "JM",
      name: "Jamaica",
    },
    {
      code: "MM",
      name: "Myanmar",
    },
    {
      code: "ZM",
      name: "Zambia",
    },
    {
      code: "NO",
      name: "Norway",
    },
    {
      code: "MD",
      name: "Moldova, Republic of",
    },
    {
      code: "BJ",
      name: "Benin",
    },
    {
      code: "TT",
      name: "Trinidad and Tobago",
    },
    {
      code: "MK",
      name: "North Macedonia",
    },
    {
      code: "BH",
      name: "Bahrain",
    },
    {
      code: "BF",
      name: "Burkina Faso",
    },
    {
      code: "SD",
      name: "Sudan",
    },
    {
      code: "ML",
      name: "Mali",
    },
    {
      code: "MG",
      name: "Madagascar",
    },
    {
      code: "BW",
      name: "Botswana",
    },
    {
      code: "KH",
      name: "Cambodia",
    },
    {
      code: "MT",
      name: "Malta",
    },
    {
      code: "IS",
      name: "Iceland",
    },
    {
      code: "SY",
      name: "Syrian Arab Republic",
    },
    {
      code: "AF",
      name: "Afghanistan",
    },
    {
      code: "TG",
      name: "Togo",
    },
    {
      code: "AM",
      name: "Armenia",
    },
    {
      code: "NA",
      name: "Namibia",
    },
    {
      code: "RW",
      name: "Rwanda",
    },
    {
      code: "GA",
      name: "Gabon",
    },
    {
      code: "CU",
      name: "Cuba",
    },
    {
      code: "LY",
      name: "Libyan Arab Jamahiriya",
    },
    {
      code: "ME",
      name: "Montenegro",
    },
    {
      code: "UZ",
      name: "Uzbekistan",
    },
    {
      code: "YE",
      name: "Yemen",
    },
    {
      code: "HT",
      name: "Haiti",
    },
    {
      code: "PG",
      name: "Papua New Guinea",
    },
    {
      code: "PS",
      name: "Palestinian Territory, Occupied",
    },
    {
      code: "MW",
      name: "Malawi",
    },
    {
      code: "MU",
      name: "Mauritius",
    },
    {
      code: "FJ",
      name: "Fiji",
    },
    {
      code: "MN",
      name: "Mongolia",
    },
    {
      code: "GN",
      name: "Guinea",
    },
    {
      code: "BS",
      name: "Bahamas",
    },
    {
      code: "EE",
      name: "Estonia",
    },
    {
      code: "GP",
      name: "Guadeloupe",
    },
    {
      code: "CV",
      name: "Cape Verde",
    },
    {
      code: "MV",
      name: "Maldives",
    },
    {
      code: "GE",
      name: "Georgia",
    },
    {
      code: "DJ",
      name: "Djibouti",
    },
    {
      code: "GM",
      name: "Gambia",
    },
    {
      code: "BB",
      name: "Barbados",
    },
    {
      code: "LR",
      name: "Liberia",
    },
    {
      code: "KG",
      name: "Kyrgyzstan",
    },
    {
      code: "MR",
      name: "Mauritania",
    },
    {
      code: "SO",
      name: "Somalia",
    },
    {
      code: "AD",
      name: "Andorra",
    },
    {
      code: "SL",
      name: "Sierra Leone",
    },
    {
      code: "BN",
      name: "Brunei Darussalam",
    },
    {
      code: "MO",
      name: "Macao",
    },
    {
      code: "LA",
      name: "Lao People's Democratic Republic",
    },
    {
      code: "SR",
      name: "Suriname",
    },
    {
      code: "SZ",
      name: "Swaziland",
    },
    {
      code: "AN",
      name: "Netherlands Antilles",
    },
    {
      code: "LS",
      name: "Lesotho",
    },
    {
      code: "BM",
      name: "Bermuda",
    },
    {
      code: "NC",
      name: "New Caledonia",
    },
    {
      code: "BI",
      name: "Burundi",
    },
    {
      code: "BT",
      name: "Bhutan",
    },
    {
      code: "SH",
      name: "Saint Helena",
    },
    {
      code: "MC",
      name: "Monaco",
    },
    {
      code: "GY",
      name: "Guyana",
    },
    {
      code: "BZ",
      name: "Belize",
    },
    {
      code: "PF",
      name: "French Polynesia",
    },
    {
      code: "GU",
      name: "Guam",
    },
    {
      code: "GF",
      name: "French Guiana",
    },
    {
      code: "JE",
      name: "Jersey",
    },
    {
      code: "SC",
      name: "Seychelles",
    },
    {
      code: "GQ",
      name: "Equatorial Guinea",
    },
    {
      code: "XK",
      name: "Kosovo",
    },
    {
      code: "TJ",
      name: "Tajikistan",
    },
    {
      code: "CG",
      name: "Congo",
    },
    {
      code: "AW",
      name: "Aruba",
    },
    {
      code: "LC",
      name: "Saint Lucia",
    },
    {
      code: "TM",
      name: "Turkmenistan",
    },
    {
      code: "GI",
      name: "Gibraltar",
    },
    {
      code: "AG",
      name: "Antigua and Barbuda",
    },
    {
      code: "IM",
      name: "Isle of Man",
    },
    {
      code: "KM",
      name: "Comoros",
    },
    {
      code: "SS",
      name: "South Sudan",
    },
    {
      code: "AS",
      name: "American Samoa",
    },
    {
      code: "GG",
      name: "Guernsey",
    },
    {
      code: "LI",
      name: "Liechtenstein",
    },
    {
      code: "CF",
      name: "Central African Republic",
    },
    {
      code: "GL",
      name: "Greenland",
    },
    {
      code: "FO",
      name: "Faroe Islands",
    },
    {
      code: "SM",
      name: "San Marino",
    },
    {
      code: "VC",
      name: "Saint Vincent and the Grenadines",
    },
    {
      code: "YT",
      name: "Mayotte",
    },
    {
      code: "TC",
      name: "Turks and Caicos Islands",
    },
    {
      code: "DM",
      name: "Dominica",
    },
    {
      code: "KN",
      name: "Saint Kitts and Nevis",
    },
    {
      code: "VU",
      name: "Vanuatu",
    },
    {
      code: "GW",
      name: "Guinea-Bissau",
    },
    {
      code: "SB",
      name: "Solomon Islands",
    },
    {
      code: "MP",
      name: "Northern Mariana Islands",
    },
    {
      code: "TV",
      name: "Tuvalu",
    },
    {
      code: "ST",
      name: "Sao Tome and Principe",
    },
    {
      code: "TL",
      name: "Timor-Leste",
    },
    {
      code: "AX",
      name: "Aland Islands",
    },
    {
      code: "AI",
      name: "Anguilla",
    },
    {
      code: "VI",
      name: "Virgin Islands, U.s.",
    },
    {
      code: "WS",
      name: "Samoa",
    },
    {
      code: "TO",
      name: "Tonga",
    },
    {
      code: "VG",
      name: "Virgin Islands, British",
    },
    {
      code: "ER",
      name: "Eritrea",
    },
    {
      code: "FM",
      name: "Micronesia, Federated States of",
    },
    {
      code: "MH",
      name: "Marshall Islands",
    },
    {
      code: "AQ",
      name: "Antarctica",
    },
    {
      code: "KI",
      name: "Kiribati",
    },
    {
      code: "PW",
      name: "Palau",
    },
    {
      code: "CK",
      name: "Cook Islands",
    },
    {
      code: "EH",
      name: "Western Sahara",
    },
    {
      code: "VA",
      name: "Holy See (Vatican City State)",
    },
    {
      code: "CW",
      name: "Curacao",
    },
    {
      code: "IO",
      name: "British Indian Ocean Territory",
    },
    {
      code: "WF",
      name: "Wallis and Futuna",
    },
    {
      code: "PM",
      name: "Saint Pierre and Miquelon",
    },
    {
      code: "MS",
      name: "Montserrat",
    },
    {
      code: "NR",
      name: "Nauru",
    },
    {
      code: "CX",
      name: "Christmas Island",
    },
    {
      code: "NU",
      name: "Niue",
    },
    {
      code: "NF",
      name: "Norfolk Island",
    },
    {
      code: "BV",
      name: "Bouvet Island",
    },
    {
      code: "GS",
      name: "South Georgia and the South Sandwich Islands",
    },
    {
      code: "TK",
      name: "Tokelau",
    },
    {
      code: "HM",
      name: "Heard Island and Mcdonald Islands",
    },
  ];
  return countries;
};
export default countryValue;
