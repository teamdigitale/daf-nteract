import * as React from "react";

// TODO: This could all be one logo that works from the core palettes as the
//       SVG structure is the same (I think), between red, purple, blue

const letteringColor = {
  daf: "#edf1f7",
  light: "#334866",
  dark: "#edf1f7"
};

interface LogoProps {
  theme: "daf" | "light" | "dark";
  height?: number;
  width?: number;
}

const defaultWidth = 940;
const defaultHeight = 274;
const ratio = defaultWidth / defaultHeight;

export const DAFWideLogo = ({
  theme,
  height: requestedHeight,
  width: requestedWidth
}: LogoProps) => {
  let height = requestedHeight;
  let width = requestedWidth;

  if (height && width) {
    // Do nothing, we'll assume that's what they want
  } else if (height) {
    // Only height was specified, scale width
    width = ratio * height;
  } else if (width) {
    height = ratio * width;
  } else {
    height = 30;
    width = ratio * height;
  }

    return <svg
        width={width}
        height={height}
        viewBox="0 0 58 47"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <desc>Created by Daniele Tabellini @Nasonero @TeamDigitale</desc>
        <defs>
            <polygon id="path-1" points="0 1.6716 11.3874 1.6716 11.3874 13.4106 0 13.4106"></polygon>
            <polygon id="path-3" points="1.2897 1.668 12.6777 1.668 12.6777 13.4061 1.2897 13.4061"></polygon>
        </defs>
        <g id="DAF-PITTOGRAMMA-2018" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="DAF-PITTOGRAMMA-2018-GRAPH" transform="translate(-140.000000, -87.000000)">
                <g id="Page-1" transform="translate(140.000000, 84.000000)">
                    <path d="M16.9035,17.9418 C15.8475,17.9418 14.9055,17.1948 14.6985,16.1208 C14.4615,14.8998 15.2565,13.7208 16.4775,13.4838 L40.1655,8.8758 C41.3745,8.6448 42.5655,9.4338 42.8055,10.6548 C43.0425,11.8758 42.2445,13.0578 41.0265,13.2948 L17.3355,17.8998 C17.1915,17.9298 17.0475,17.9418 16.9035,17.9418" id="Fill-1" fill={letteringColor[theme]}></path>
                    <path d="M52.0686,33.9729 L52.0656,33.9729 C50.8206,33.9699 49.8156,32.9619 49.8186,31.7199 L49.8426,20.6019 C49.8456,19.3629 50.8506,18.3579 52.0926,18.3579 L52.0956,18.3579 C53.3406,18.3609 54.3456,19.3689 54.3426,20.6109 L54.3186,31.7259 C54.3156,32.9679 53.3106,33.9729 52.0686,33.9729" id="Fill-3" fill={letteringColor[theme]}></path>
                    <path d="M40.596,45.6492 L36.261,45.6492 C35.019,45.6492 34.011,44.6412 34.011,43.3992 C34.011,42.1572 35.019,41.1492 36.261,41.1492 L40.596,41.1492 C41.838,41.1492 42.846,42.1572 42.846,43.3992 C42.846,44.6412 41.838,45.6492 40.596,45.6492" id="Fill-5" fill={letteringColor[theme]}></path>
                    <path d="M17.8206,36.3006 C17.1366,36.3006 16.4616,35.9886 16.0176,35.4006 L10.9806,28.6776 C10.2366,27.6846 10.4376,26.2746 11.4336,25.5306 C12.4296,24.7866 13.8366,24.9876 14.5806,25.9806 L19.6206,32.7006 C20.3646,33.6966 20.1636,35.1066 19.1676,35.8506 C18.7626,36.1536 18.2916,36.3006 17.8206,36.3006" id="Fill-7" fill={letteringColor[theme]}></path>
                    <g id="Group-11" transform="translate(0.000000, 10.332000)">
                        <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1"></use>
                        </mask>
                        <g id="Clip-10"></g>
                        <path d="M5.7474,13.4106 C4.0734,13.4106 2.6994,12.8436 1.6194,11.7126 C0.5394,10.5816 -0.0006,9.1806 -0.0006,7.5096 C-0.0006,5.8326 0.5394,4.4436 1.6104,3.3336 C2.6814,2.2236 4.0554,1.6716 5.7354,1.6716 C7.4064,1.6716 8.7714,2.2356 9.8124,3.3726 C10.8594,4.5126 11.3874,5.9136 11.3874,7.5786 C11.3874,9.2466 10.8594,10.6356 9.8124,11.7426 C8.7714,12.8526 7.4124,13.4106 5.7474,13.4106" id="Fill-9" fill={letteringColor[theme]} mask="url(#mask-2)"></path>
                    </g>
                    <g id="Group-14" transform="translate(45.000000, 1.332000)">
                        <mask id="mask-4" fill="white">
                            <use xlinkHref="#path-3"></use>
                        </mask>
                        <g id="Clip-13"></g>
                        <path d="M7.0377,13.4061 C5.3637,13.4061 3.9897,12.8391 2.9097,11.7081 C1.8297,10.5771 1.2897,9.1761 1.2897,7.5051 C1.2897,5.8281 1.8297,4.4391 2.9007,3.3291 C3.9717,2.2191 5.3457,1.6671 7.0257,1.6671 C8.6967,1.6671 10.0617,2.2311 11.1027,3.3681 C12.1497,4.5081 12.6777,5.9091 12.6777,7.5741 C12.6777,9.2421 12.1497,10.6311 11.1027,11.7381 C10.0617,12.8481 8.7027,13.4061 7.0377,13.4061" id="Fill-12" fill={letteringColor[theme]} mask="url(#mask-4)"></path>
                    </g>
                    <path d="M52.0377,49.332 C50.3637,49.332 48.9897,48.765 47.9097,47.634 C46.8297,46.503 46.2897,45.102 46.2897,43.431 C46.2897,41.754 46.8297,40.365 47.9007,39.255 C48.9717,38.145 50.3457,37.593 52.0257,37.593 C53.6967,37.593 55.0617,38.157 56.1027,39.294 C57.1497,40.434 57.6777,41.835 57.6777,43.5 C57.6777,45.168 57.1497,46.557 56.1027,47.664 C55.0617,48.774 53.7027,49.332 52.0377,49.332" id="Fill-15" fill={letteringColor[theme]}></path>
                    <path d="M24.9279,49.332 C23.2539,49.332 21.8799,48.765 20.7999,47.634 C19.7199,46.503 19.1799,45.102 19.1799,43.431 C19.1799,41.754 19.7199,40.365 20.7909,39.255 C21.8619,38.145 23.2359,37.593 24.9159,37.593 C26.5869,37.593 27.9519,38.157 28.9899,39.294 C30.0399,40.434 30.5679,41.835 30.5679,43.5 C30.5679,45.168 30.0399,46.557 28.9899,47.664 C27.9519,48.774 26.5929,49.332 24.9279,49.332" id="Fill-17" fill={letteringColor[theme]}></path>
                </g>
            </g>
        </g >
    </svg >

};

DAFWideLogo.defaultProps = {
  theme: "daf"
};

export default DAFWideLogo;
