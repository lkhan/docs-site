(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{236:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("When you install Zowe, you install the Zowe Application Framework, explorer server, and API Mediation Layer together on z/OS. You install Zowe CLI independently on your computer.")]),e._v(" "),r("p",[e._v("Before installing Zowe, ensure that your environment meets all of the prerequisites.")]),e._v(" "),e._m(1),e._v(" "),r("ul",[e._m(2),e._v(" "),e._m(3),e._v(" "),r("li",[r("p",[e._v("Node.js Version 6.14.4 or later on the z/OS host where you install the Zowe Application Server.")]),e._v(" "),r("ol",[r("li",[e._v("To install Node.js on z/OS, follow the procedures at "),r("a",{attrs:{href:"https://developer.ibm.com/node/sdk/ztp",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.ibm.com/node/sdk/ztp"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6)]),e._v(" "),e._m(7),e._v(" "),e._m(8)]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),r("p",[e._v("The following information contains procedures and tips for meeting z/OSMF requirements. For complete information, go to "),r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3/en/homepage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Knowledge Center"),r("OutboundLink")],1),e._v(" and read the following documents.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_PartConfiguring.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM z/OS Management Facility Configuration Guide"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izu/izu.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM z/OS Management Facility Help"),r("OutboundLink")],1)])]),e._v(" "),e._m(14),e._v(" "),r("p",[e._v("Ensure that the z/OS system meets the following requirements:")]),e._v(" "),r("table",[e._m(15),e._v(" "),r("tbody",[e._m(16),e._v(" "),r("tr",[r("td",[e._v("AXR (System REXX)")]),e._v(" "),r("td",[e._v("z/OS uses AXR (System REXX) component to perform Incident Log tasks. The component enables REXX executable files to run outside of conventional TSO and batch environments.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.ieaa800/systemrexx.htm",title:"System REXX",target:"_blank",rel:"noopener noreferrer"}},[e._v("System REXX"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Common Event Adapter (CEA) server")]),e._v(" "),r("td",[e._v("The CEA server, which is a co-requisite of the Common Information Model (CIM) server, enables the ability for z/OSMF to deliver z/OS events to C-language clients.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.e0zb100/custcea.htm",title:"Customizing for CEA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Customizing for CEA"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Common Information Model (CIM) server")]),e._v(" "),r("td",[e._v("z/OSMF uses the CIM server to perform capacity-provisioning and workload-management tasks. Start the CIM server before you start z/OSMF (the IZU* started tasks).")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_AdditionalCIMStepsForZOS.htm",title:"Reviewing your CIM server setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reviewing your CIM server setup"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("CONSOLE and CONSPROF commands")]),e._v(" "),r("td",[e._v("The CONSOLE and CONSPROF commands must exist in the authorized command table.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.ikjb400/consol.htm",title:"Customizing the CONSOLE and CONSPROF commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("Customizing the CONSOLE and CONSPROF commands"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("IBM z/OS Provisioning Toolkit")]),e._v(" "),r("td",[e._v("The IBM® z/OS® Provisioning Toolkit is a command line utility that provides the ability to provision z/OS development environments. If you want to provision CICS or Db2 environments with the Zowe CLI, this toolkit is required.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.izsc300/cloudProvOverview.htm",title:"What is IBM Cloud Provisioning and Management for z/OS?",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is IBM Cloud Provisioning and Management for z/OS? "),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("Java level")]),e._v(" "),r("td",[e._v("IBM® 64-bit SDK for z/OS®, Java Technology Edition V8 or later is required.")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_SoftwarePrereqs.htm",title:"Software prerequisites for z/OSMF",target:"_blank",rel:"noopener noreferrer"}},[e._v("Software prerequisites for z/OSMF"),r("OutboundLink")],1)])]),e._v(" "),e._m(17),e._v(" "),e._m(18)])]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),r("ol",[e._m(21),e._v(" "),r("li",[r("p",[e._v("Configure z/OSMF.")]),e._v(" "),r("p",[e._v("z/OSMF is a base element of z/OS V2.2 and V2.3, so it is already installed. But it might not be configured and running on every z/OS V2.2 and V2.3 system.")]),e._v(" "),r("p",[e._v("In short, to configure an instance of z/OSMF, run the IBM-supplied jobs IZUSEC and IZUMKFS, and then start the z/OSMF server.\nThe z/OSMF configuration process occurs in three stages, and in the following order:")]),e._v(" "),e._m(22),e._v(" "),r("p",[e._v("This stage sequence is critical to a successful configuration. For complete information about how to configure z/OSMF, see "),r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.2.0/com.ibm.zos.v2r2.izua300/IZUHPINFO_ConfiguringMain.htm",title:"Configuring z/OSMF",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuring z/OSMF for the first time"),r("OutboundLink")],1),e._v(" if you use z/OS V2.2 or "),r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/IZUHPINFO_ConfiguringMain.htm",title:"Setting up z/OSMF for the first time",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setting up z/OSMF for the first time"),r("OutboundLink")],1),e._v(" if V2.3.")])])]),e._v(" "),e._m(23),e._v(" "),r("p",[e._v("The z/OS Operator Consoles task is new in Version 2.3. Applications that depend on access to the operator console such as Zowe CLI's RestConsoles API require Version 2.3.")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://docops.ca.com/ca-top-secret-for-z-os/16-0/en/installing/configure-z-os-management-facility-for-ca-top-secret",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure z/OS Management Facility for CA Top Secret"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docops.ca.com/ca-acf2-for-z-os/16-0/en/installing-and-implementing/configure-z-os-management-facility-for-ca-acf2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure z/OS Management Facility for CA ACF2"),r("OutboundLink")],1)])])]),e._v(" "),e._m(26),e._v(" "),r("p",[e._v("The Zowe CLI uses z/OSMF Representational State Transfer (REST) APIs to work with system resources and extract system data. Ensure that the following REST services are configured and available.")]),e._v(" "),r("table",[e._m(27),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Cloud provisioning services")]),e._v(" "),e._m(28),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua300/izuconfig_CloudProvSecuritySetup.htm",title:"Cloud provisioning services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud provisioning services"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("TSO/E address space services")]),e._v(" "),e._m(29),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/izuprog_API_TSOServices.htm",title:"TSO/E address space services",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSO/E address space services"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("z/OS console services")]),e._v(" "),e._m(30),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_API_RESTCONSOLE.htm",title:"z/OS console",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS console services"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("z/OS data set and file REST interface")]),e._v(" "),e._m(31),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_API_RESTFILES.htm",title:"z/OS data set and file interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS data set and file REST interface"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("z/OS jobs REST interface")]),e._v(" "),e._m(32),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_API_RESTJOBS.htm",title:"z/OS jobs interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS jobs REST interface"),r("OutboundLink")],1)])]),e._v(" "),r("tr",[r("td",[e._v("z/OSMF workflow services")]),e._v(" "),e._m(33),e._v(" "),r("td",[r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/izuprog_API_WorkflowServices.htm",title:"z/OSMF workflow services",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OSMF workflow services"),r("OutboundLink")],1)])])])]),e._v(" "),e._m(34),e._v(" "),r("p",[e._v("For more information, see "),r("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.izua700/IZUHPINFO_RESTServices.htm",title:"Using the z/OSMF REST services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using the z/OSMF REST services"),r("OutboundLink")],1),e._v(" in IBM z/OSMF documentation.")]),e._v(" "),r("p",[e._v("To verify that z/OSMF REST services are configured correctly in your environment, enter the REST endpoint into your browser. For example: https://mvs.ibm.com:443/zosmf/restjobs/jobs")]),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),r("p",[e._v("You can now configure z/OSMF Zowe CLI now supports the")]),e._v(" "),e._m(38),e._v(" "),r("p",[e._v("The following information is required during the installation process of API Mediation Layer, Zowe Application Framework, and explorer server. Make the decisions before the installtion.")]),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),r("p",[e._v("Before you install Zowe CLI, make sure your system meets the following requirements:")]),e._v(" "),e._m(41),e._v(" "),r("p",[e._v("The following prerequisites for Windows, Mac, and Linux are required if you are installing Zowe CLI from a local package. If you are installing Zowe CLI from Bintray registry, you only require Node.js and npm.")]),e._v(" "),e._m(42),e._v(" "),r("p",[e._v("Ensure that the following prerequisite software is installed on your computer:")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Node.js V8.0 or later")]),r("OutboundLink")],1)]),e._v(" "),e._m(43)]),e._v(" "),e._m(44)]),e._v(" "),e._m(45),e._v(" "),r("p",[e._v("CA Brightside Community Edition is supported on any platform where Node.js 8.0 or 10 is available, including Windows, Linux, and Mac operating systems. For information about known issues and workarounds, see "),r("router-link",{attrs:{to:"./../troubleshoot/troubleshootinstall.html#troubleshooting-installing-zowe-cli"}},[e._v("Troubleshooting installing Zowe CLI")]),e._v(".")],1),e._v(" "),r("p",[e._v("Zowe CLI is designed and tested to integrate with z/OSMF running on IBM z/OS Version 2.2 or later. Before you can use Zowe CLI to interact with the mainframe, system programmers must install and configure IBM z/OSMF in your environment.")]),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),e._m(48),e._v(" "),e._m(49)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"system-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" System requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("z/OS host requirements (for all components):")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("IBM z/OS Management Facility (z/OSMF) Version 2.2 or Version 2.3.")]),this._v(" "),t("p",[this._v("z/OSMF is a prerequisite for the Zowe microservice. z/OSMF must be installed and running before you use Zowe. For details, see "),t("a",{attrs:{href:"#zosmf-configuration"}},[this._v("z/OSMF configuration")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("z/OS® Version 2.2 or later.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Notes:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("To install Node.js on z/OS, ensure that you meet the following requirements in the procedure. Other requirements, including installing Python, Make 4.1, or Perl, are not needed.")]),this._v(" "),t("blockquote",[t("p",[this._v("z/OS V2R2 with PTF UI46658 or z/OS V2R3, z/OS UNIX System Services enabled, and Integrated Cryptographic Service Facility (ICSF) configured and started.")])])]),this._v(" "),t("li",[t("p",[this._v("The step of installing the C/C++ compiler is not necessary for running the Zowe Application Framework.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("Set the "),t("em",[this._v("NODE_HOME")]),this._v(" environment variable to the directory where Node.js is installed. For example, "),t("code",[this._v("NODE_HOME=/proj/mvd/node/installs/node-v6.14.4-os390-s390x")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("npm 5.4 or later for building Zowe Application Framework applications.")]),this._v(" "),t("p",[this._v("To update npm, issue the following command:")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install -g npm\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("IBM SDK for Java Technology Edition V8 or later")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Disk and browser requirements (for Zowe desktop):")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("p",[e._v("833 MB of HFS file space.")])]),e._v(" "),r("li",[r("p",[e._v("Supported browsers:")]),e._v(" "),r("ul",[r("li",[e._v("Google Chrome V54 or later")]),e._v(" "),r("li",[e._v("Mozilla Firefox V44 or later")]),e._v(" "),r("li",[e._v("Safari V11 or later")]),e._v(" "),r("li",[e._v("Microsoft Edge (Windows 10)")])])]),e._v(" "),r("li",[r("p",[e._v("npm 5.4 or later for building Zowe Application Framework applications.")]),e._v(" "),r("p",[e._v("To update npm, issue the following command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("npm install -g npm\n")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Client requirements (for Zowe CLI):")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Any platform where Node.js 8.0 or 10 is available, including Windows, Linux, and Mac operating systems. For details, see "),t("a",{attrs:{href:"#system-requirements-for-zowe-cli"}},[this._v("System requirements for Zowe CLI")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"z-osmf-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-osmf-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" z/OSMF configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"z-os-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-os-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" z/OS requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Requirements")]),this._v(" "),t("th",[this._v("Description")]),this._v(" "),t("th",[this._v("Resources in IBM Knowledge Center")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("Integrated Cryptographic Service Facility (ICSF)")]),this._v(" "),t("td",[this._v("On z/OS, Node requires ICSF to be installed, configured and started.")]),this._v(" "),t("td",[this._v("N/A")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("TSO region size")]),this._v(" "),t("td",[this._v("To prevent "),t("strong",[this._v("exceeds maximum region size")]),this._v(" errors, verify that the TSO maximum region size is a minimum of 65536 KB for the z/OS system.")]),this._v(" "),t("td",[this._v("N/A")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("User IDs")]),this._v(" "),t("td",[this._v("User IDs require a TSO segment (access) and an OMVS segment. During workflow processing and REST API requests, z/OSMF might start one or more TSO address spaces under the following job names: userid; substr(userid, 1, 6) CN (Console).")]),this._v(" "),t("td",[this._v("N/A")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"configuring-z-osmf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-z-osmf","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring z/OSMF")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Follow these steps:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("From the console, issue the following command to verify the version of z/OS:")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/D IPLINFO\n")])])]),t("p",[this._v("Part of the output contains the release, for example,")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("RELEASE z/OS 02.02.00.\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Stage 1 - Security setup")]),this._v(" "),t("li",[this._v("Stage 2 - Configuration")]),this._v(" "),t("li",[this._v("Stage 3 - Server initialization")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" In z/OS V2.3, the base element z/OSMF is started by default at system initial program load (IPL). Therefore, z/OSMF is available for use as soon as you set up the system. If you prefer not to start z/OSMF automatically, disable the autostart function by checking for "),t("code",[this._v("START")]),this._v(" commands for the z/OSMF started procedures in the "),t("em",[this._v("COMMNDxx parmlib")]),this._v(" member.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",{attrs:{start:"3"}},[r("li",[r("p",[e._v("Verify that the z/OSMF server and angel processes are running. From the command line, issue the following command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("/D A,IZU*\n")])])]),r("p",[e._v("If jobs IZUANG1 and IZUSVR1 are not active, issue the following command to start the angel process:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("/S IZUANG1\n")])])]),r("p",[e._v('After you see the message ""CWWKB0056I INITIALIZATION COMPLETE FOR ANGEL"", issue the following command to start the server:')]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("/S IZUSVR1\n")])])]),r("p",[e._v('The server might take a few minutes to initialize. The z/OSMF server is available when the message ""CWWKF0011I: The server zosmfServer is ready to run a smarter planet."" is displayed.')])]),e._v(" "),r("li",[r("p",[e._v("Issue the following command to find the startup messages in the SDSF log of the z/OSMF server:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("f IZUG349I\n")])])]),r("p",[e._v("You could see a message similar to the following message, which indicates the port number:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("IZUG349I: The z/OSMF STANDALONE Server home page can be accessed at  https://mvs.hursley.ibm.com:443/zosmf after the z/OSMF server is started on your system.\n")])])]),r("p",[e._v("In this example, the port number is 443. You will need this port number later.")]),e._v(" "),r("p",[e._v("Point your browser at the nominated z/OSMF STANDALONE Server home page and you should see its Welcome Page where you can log in.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" If your implementation uses an external security manager other than RACF (for example, CA Top Secret or CA ACF2), you provide equivalent commands for your environment. For more information, see the following CA Technologies product documentation:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"z-osmf-rest-services-for-the-zowe-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-osmf-rest-services-for-the-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" z/OSMF REST services for the Zowe CLI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("z/OSMF REST services")]),this._v(" "),t("th",[this._v("Requirements")]),this._v(" "),t("th",[this._v("Resources in IBM knowledge Center")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("Cloud provisioning services are required for the Zowe CLI CICS and Db2 command groups. Endpoints begin with "),t("code",[this._v("/zosmf/provisioning/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("TSO/E address space services are required to issue TSO commands in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/tsoApp")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OS console services are required to issue console commands in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/restconsoles/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OS data set and file REST interface is required to work with mainframe data sets and UNIX System Services files in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/restfiles/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OS jobs REST interface is required to use the zos-jobs command group in the Zowe CLI. Endpoints begin with "),t("code",[this._v("/zosmf/restjobs/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[this._v("z/OSMF workflow services is required to create and manage z/OSMF workflows on a z/OS system. Endpoints begin with "),t("code",[this._v("/zosmf/workflow/")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Zowe uses symbolic links to the z/OSMF "),t("code",[this._v("bootstrap.properties")]),this._v(", "),t("code",[this._v("jvm.security.override.properties")]),this._v(", and "),t("code",[this._v("ltpa.keys")]),this._v(" files. Zowe reuses SAF, SSL, and LTPA configurations; therefore, they must be valid and complete.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Notes:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Browsing z/OSMF endpoints requests your user ID and password for defaultRealm; these are your TSO user credentials.")]),this._v(" "),t("li",[this._v("The browser returns the status code 200 and a list of all jobs on the z/OS system. The list is in raw JSON format.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("More Information:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"planning-for-installation-of-api-mediation-layer-zowe-application-framework-and-explorer-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#planning-for-installation-of-api-mediation-layer-zowe-application-framework-and-explorer-server","aria-hidden":"true"}},[this._v("#")]),this._v(" Planning for installation of API Mediation Layer, Zowe Application Framework, and explorer server")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("p",[e._v("The HFS directory where you install Zowe, for example, "),r("code",[e._v("/var/zowe")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("The HFS directory that contains a 64-bit Java™ 8 JRE.")])]),e._v(" "),r("li",[r("p",[e._v("The z/OSMF installation directory that contains "),r("code",[e._v("derby.jar")]),e._v(", for example, "),r("code",[e._v("/usr/lpp/zosmf/lib")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("The z/OSMF configuration user directory that contains the following z/OSMF files:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("/bootstrap.properties")])]),e._v(" "),r("li",[r("code",[e._v("/jvm.security.override.properties")])]),e._v(" "),r("li",[r("code",[e._v("/resources/security/ltpa.keys")])])])]),e._v(" "),r("li",[r("p",[e._v("The HTTP and HTTPS port numbers of the explorer server. By default, they are 7080 and 7443.")])]),e._v(" "),r("li",[r("p",[e._v("The API Mediation Layer HTTP and HTTPS port numbers. You will be asked for 3 unique port numbers.")])]),e._v(" "),r("li",[r("p",[e._v("The user ID that runs the Zowe started task.")]),e._v(" "),r("p",[r("strong",[e._v("Tip:")]),e._v(" Use the same user ID that runs the z/OSMF "),r("code",[e._v("IZUSVR1")]),e._v(" task, or a user ID with equivalent authorizations.")])]),e._v(" "),r("li",[r("p",[e._v("The mainframe account under which the ZSS server runs must have UPDATE permission on the "),r("code",[e._v("BPX.DAEMON")]),e._v(" and "),r("code",[e._v("BPX.SERVER")]),e._v(" facility class profiles.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"system-requirements-for-zowe-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements-for-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" System requirements for Zowe CLI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"prerequisite-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite-software","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisite software")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note:")]),this._v(" As a best practice, we recommend that you update Node.js regularly to the latest Long Term Support (LTS) version.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Tip:")]),this._v(" You might need to restart the command prompt after installing Node.js. Issue the command "),t("code",[this._v("node --version")]),this._v(" to verify that Node.js is installed.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("strong",[this._v("Node Package Manager V5.0 or later")])]),this._v(" "),t("p",[this._v("npm is included with the Node.js installation. Issue the command "),t("code",[this._v("npm --version")]),this._v(" to verify that npm is installed.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"supported-platforms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-platforms","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported platforms")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Important!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Oracle Linux 6 is not supported.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"free-disk-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#free-disk-space","aria-hidden":"true"}},[this._v("#")]),this._v(" Free disk space")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Zowe CLI requires approximately "),t("strong",[this._v("100 MB")]),this._v(" of free disk space. The actual quantity of free disk space consumed might vary depending on the operating system where you install Zowe CLI.")])}],!1,null,null,null);i.options.__file="systemrequirements.md";t.default=i.exports}}]);