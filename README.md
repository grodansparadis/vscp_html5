<h1>VSCP & Friends - HTML5 UX demos</h1>

<img src="http://vscp.org/images/logo.png" width="200px" alt="VSCP logo">

This is the VSCP HTML5 user interface component framework which 
can be used to create nice and responsible user interfaces experiences.

The provided demo's are based on websocket and REST interface to the VSCP server.
The interfaces itself are described in the VSCP daemon documentation:
* <a href="http://www.vscp.org/docs/vscpd/doku.php?id=vscp_daemon_vscp_daemon_rest_interface">REST</a>
* <a href="http://www.vscp.org/docs/vscpd/doku.php?id=vscp_daemon_vscp_websocket_interface">Websocket</a>

If you want to know more about the <a href="http://www.vscp.org">VSCP project</a> visit the VSCP web site.

Everything is released under the <a href="http://opensource.org/licenses/MIT">MIT License</a>.

<h4>Getting started</h4>

On a standard system install this full source tree at /srv/vscp/web (programdata/vscp/www on windows) 
or other folder set in <b>&lt;webrootpath&gt;...&lt;/webrootpath&gt;</b> directive under the 
<b>&lt;websrver&gt;</b> tag in the vscpd.conf file of the VSCP daemon.

If you just want the VSCP websocket or REST javascript code you find it in the 'js/vscp-js' folder.
Or get them from its repository:<a href="https://github.com/grodansparadis/vscp-js/">https://github.com/grodansparadis/vscp-js/</a>
You should probably compress this javascript file for a production system. There are plenty of them around <a href="http://javascriptcompressor.com">this</a> is one of them.

<h4>Demos</h4>

You will find the demo code in the demo subfolder. The *index.html* file in it will take you to it and give some further instructions.
The folder contains a few demos on how to use VSCP widgets and demonstrates the VSCP daemon websocket and REST interface.

In the configuration file this is set as

<pre><code>
&lt;!-- Path to server root file system                       --&gt;
&lt;!-- Server should have read/write access to this location --&gt;
&lt;webserver enable="true" port="8080"&gt;
   <webrootpath>/srv/vscp/web</webrootpath&gt;
   ...
   ...
&lt;/webserver&gt;
</code></pre>

Remember to restart the daemon if you change the configuration file.

To test that everything is working enter

<b>http://localhost:8884/testws/index.html</b>

and you should get the start page which takes you true the rest of the demo..

Some useful commands for the vanilla test window

<h5>5 Turn ON  Zone=1, Subzone=35</h5>
<b>send 0,30,5,0,0,-,0,1,35</b>

<h5>6 Turn Off</h5>
<b>send 0,30,6,0,0,-,0,1,35</b>

<h5>7 Start</h5>
</b>send 0,30,7,0,0,-,0,1,35</b>

<h5>8 stop</h5>
</b>send 0,30,8,0,0,-,0,1,35</b>

send head,class,type,obid,time-stamp,GUID,data1,data2,data3....

<br><br>
<hr>
Copyright &copy; 2015-2019 Andreas Merkle (vscp@blue-andi.de)<br />
Copyright &copy; 2012-2019 <a href="http://www.grodansparadis.com">Grodans Paradis AB (Paradise of the Frog)</a>
