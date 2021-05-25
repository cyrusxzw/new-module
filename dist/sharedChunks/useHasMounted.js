"use strict";var e=require("react");exports.useHasMounted=function(){var t=e.useState(!1),r=t[0],u=t[1];return e.useEffect((function(){return u(!0),function(){u(!1)}}),[r]),r};
