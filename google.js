//<![CDATA[
       if (typeof(jQuery) == 'undefined') {document.write("<scr" + "ipt type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js\"></scr" + "ipt>");}
       //]]>     
         <b:if cond='data:post.numComments != 0'>
         var Items = <data:post.commentJso/>;
         var Msgs = <data:post.commentMsgs/>;
         var Config = <data:post.commentConfig/>;
        <b:else/>
         var Items = {};
         var Msgs = {};
         var Config = {&quot;maxThreadDepth&quot;:&quot;0&quot;};
        </b:if>
       //<![CDATA[
function downloadJSAtOnload2(){var d=document.createElement("script");d.src="https://github.com/akkradet/Ezyox.blogspot.com/blob/master/comment-hack.js",document.body.appendChild(d)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload2,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload2):window.onload=downloadJSAtOnload2;
//
$(document).ready(function()
{
if($("#mycredit").attr("href")!="http://ezyox.blogspot.com/")
{
window.location.href="http://ezyox.blogspot.com";
}
});
