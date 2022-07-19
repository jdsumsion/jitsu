import { booleanType, descriptionType, stringType } from "../../sources/types"

const icon = (
  <svg width="100%" height="100%" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient
        cx="79.1305263%"
        cy="87.6448158%"
        fx="79.1305263%"
        fy="87.6448158%"
        r="96.9897763%"
        id="radialGradient-1"
      >
        <stop stop-color="#2440E6" offset="0%"></stop>
        <stop stop-color="#5661B3" offset="100%"></stop>
      </radialGradient>
      <radialGradient
        cx="0%"
        cy="30.2198829%"
        fx="0%"
        fy="30.2198829%"
        r="62.2688936%"
        gradientTransform="translate(0.000000,0.302199),scale(1.000000,0.722519),rotate(61.734530),translate(-0.000000,-0.302199)"
        id="radialGradient-2"
      >
        <stop stop-color="#6574CD" stop-opacity="0.5" offset="0%"></stop>
        <stop stop-color="#6574CD" offset="100%"></stop>
      </radialGradient>
    </defs>
    <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Group-4" transform="translate(19.000000, 0.000000)">
        <g id="Group-3" transform="translate(-19.000000, 0.000000)">
          <rect id="Rectangle" x="0" y="0" width="1000" height="1000"></rect>
          <g id="Bitmap" transform="translate(124.069479, 0.000000)">
            <g
              id="Group"
              transform="translate(376.923077, 500.000000) scale(-1, 1) rotate(-180.000000) translate(-376.923077, -500.000000) translate(2.233251, -0.000000)"
            >
              <circle id="Oval" fill="url(#radialGradient-1)" cx="373.69727" cy="624.069479" r="373.449132"></circle>
              <path
                d="M309.677419,993.322174 C232.506203,979.92267 167.493797,947.168328 113.647643,894.562869 C58.3126551,840.468576 24.0694789,777.44128 7.44416873,698.781231 L1.7369727,671.982223 L0.992555831,336.498352 L0.248138958,0.76634245 L7.19602978,0.76634245 C11.1662531,0.76634245 23.82134,2.00703724 35.235732,3.24773203 C132.754342,15.158402 215.632754,74.215474 260.794045,163.793638 C272.208437,186.622422 280.397022,212.925151 286.104218,245.679494 C290.818859,273.471057 291.066998,282.652199 290.322581,427.56535 L289.578164,580.170809 L295.533499,595.059146 C303.722084,615.406541 326.30273,637.987186 346.650124,646.175772 L361.538462,652.131107 L500.496278,652.379246 C576.923077,652.379246 643.920596,653.371802 649.131514,654.364357 C673.449132,659.078998 699.503722,679.426392 709.925558,702.007037 C712.903226,708.210511 716.873449,720.36932 718.610422,728.557906 C721.33995,742.205548 721.091811,745.927633 717.121588,761.312248 C704.71464,806.969816 661.042184,870.245251 616.377171,907.217955 C565.756824,949.153439 509.925558,977.193141 449.627792,991.337062 C417.866005,998.533092 345.905707,999.773787 309.677419,993.322174 Z"
                id="Path"
                fill="url(#radialGradient-2)"
                fill-rule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const plausibleDestination = {
  description: <></>,
  syncFromSourcesStatus: "not_supported",
  id: "plausible",
  type: "other",
  displayName: "Plausible",
  defaultTransform: "",
  hidden: false,
  deprecated: false,
  parameters: [
    {
      id: "_super_type",
      constant: "npm",
    },
    {
      id: "_package",
      constant: "@tangible/jitsu-plausible-destination",
    },
    {
      id: "_formData.meta_package",
      displayName: "Package",
      type: descriptionType,
      defaultValue: (
        <>
          Implementation is based on <b>npm-package:</b>{" "}
          <a target={"_blank"} href={"https://www.npmjs.com/package/@tangible/jitsu-plausible-destination"}>
            @tangible/jitsu-plausible-destination
          </a>
        </>
      ),
    },
    {
      id: "_formData.anonymous",
      displayName: "Anonymous",
      required: true,
      type: booleanType,
    },
    {
      id: "_formData.plausible_domain",
      displayName: "Plausible Domain",
      required: true,
      type: stringType,
    },
    {
      id: "_formData.plausible_port",
      displayName: "Plausible Port",
      required: true,
      type: stringType,
    },
  ],
  ui: {
    icon,
    connectCmd: null,
    title: cfg => "project id: " + cfg["_formData"]["project_id"],
  },
} as const

export default plausibleDestination
