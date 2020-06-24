import React from "react";
import "./DataPrivacy.css";
import {Link} from "react-router-dom";

export function DataPrivacy(){

    return(
        <div id="data-button-outer" className="flex">
            <div id="data-button-inner" className="flex">
                <Link to="/datenschutz"id="data-button" className="flex">Datenschutz</Link>
            </div>
        </div>  
    )
}

export function DataPrivacyDE(){
    return(
        <div className="datenschutz"> 
            <Link to="/" className="data-back-main">X</Link>   
            <Link to="/datapolicy">Privacy Policy in English</Link>                              
            <h2>Datenschutzerklärung</h2>
            <p>Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.</p>
            <p>Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</p>
            <p>Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung verarbeiten.</p>
            <p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
            <p>I. Informationen über uns als Verantwortliche<br></br>II. Rechte der Nutzer und Betroffenen<br></br>III. Informationen zur Datenverarbeitung</p>
            <h3>I. Informationen über uns als Verantwortliche</h3>
            <p>Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:</p>
            <p><span className="address">Lars-Peter Feigl<br></br>Fliederbusch 54<br></br>52355 Düren<br></br>Deutschland</span></p>
            <p><span className="address">Telefon: 0176-619 905 97<br></br>E-Mail: gameslpf0@gmail.com</span></p>
            <p>Datenschutzbeauftragte/r beim Anbieter ist:</p>
            <p><span className="address">Lars-Peter Feigl</span></p>
            <h3>II. Rechte der Nutzer und Betroffenen</h3>
            <p>Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht</p>
            <ul>
            <li>auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);</li>
            <li>auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);</li>
            <li>auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;</li>
            <li>auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);</li>
            <li>auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).</li>
            </ul>
            <p>Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese Empfänger.</p>
            <p><strong>Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.</strong></p>
            <h3>III. Informationen zur Datenverarbeitung</h3>
            <p>Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.</p>

            <h4>Serverdaten</h4>
            <p>Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren und stabilen Internetauftritts, werden Daten durch Ihren Internet-Browser an uns bzw. an unseren Webspace-Provider übermittelt. Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s) unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.</p>
            <p>Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch nicht gemeinsam mit anderen Daten von Ihnen.</p>
            <p>Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung, Stabilität, Funktionalität und Sicherheit unseres Internetauftritts.</p>
            <p>Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist. Andernfalls sind die Daten bis zur endgültigen Klärung eines Vorfalls ganz oder teilweise von der Löschung ausgenommen.</p>

            <h4>Cookies</h4>
            <h5>a) Sitzungs-Cookies/Session-Cookies</h5>
            <p>Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine Textdateien oder andere Speichertechnologien, die durch den von Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt und gespeichert werden. Durch diese Cookies werden im individuellen Umfang bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- oder Standortdaten oder Ihre IP-Adresse, verarbeitet. &nbsp;</p>
            <p>Durch diese Verarbeitung wird unser Internetauftritt benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen oder das Angebot einer Warenkorbfunktion ermöglicht.</p>
            <p>Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung verarbeitet werden.</p>
            <p>Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der Verbesserung der Funktionalität unseres Internetauftritts. Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO.</p>
            <p>Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies gelöscht.</p>
            <h5>b) Drittanbieter-Cookies</h5>
            <p>Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse oder der Funktionalitäten unseres Internetauftritts zusammenarbeiten, verwendet.</p>
            <p>Die Einzelheiten hierzu, insbesondere zu den Zwecken und den Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies, entnehmen Sie bitte den nachfolgenden Informationen.</p>
            <h5>c) Beseitigungsmöglichkeit</h5>
            <p>Sie können die Installation der Cookies durch eine Einstellung Ihres Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie bereits gespeicherte Cookies jederzeit löschen. Die hierfür erforderlichen Schritte und Maßnahmen hängen jedoch von Ihrem konkret genutzten Internet-Browser ab. Bei Fragen benutzen Sie daher bitte die Hilfefunktion oder Dokumentation Ihres Internet-Browsers oder wenden sich an dessen Hersteller bzw. Support. Bei sog. Flash-Cookies kann die Verarbeitung allerdings nicht über die Einstellungen des Browsers unterbunden werden. Stattdessen müssen Sie insoweit die Einstellung Ihres Flash-Players ändern. Auch die hierfür erforderlichen Schritte und Maßnahmen hängen von Ihrem konkret genutzten Flash-Player ab. Bei Fragen benutzen Sie daher bitte ebenso die Hilfefunktion oder Dokumentation Ihres Flash-Players oder wenden sich an den Hersteller bzw. Benutzer-Support.</p>
            <p>Sollten Sie die Installation der Cookies verhindern oder einschränken, kann dies allerdings dazu führen, dass nicht sämtliche Funktionen unseres Internetauftritts vollumfänglich nutzbar sind. </p>

            <h4>Kontaktanfragen / Kontaktmöglichkeit</h4>
            <p>Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich - ohne deren Bereitstellung können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.</p>
            <p>Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</p>
            <p>Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig anschließenden Vertragsabwicklung.</p>

            <h4>Google Fonts</h4>
            <p>In unserem Internetauftritt setzen wir Google Fonts zur Darstellung externer Schriftarten ein. Es handelt sich hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, nachfolgend nur „Google“ genannt.</p>
            <p>Durch die Zertifizierung nach dem EU-US-Datenschutzschild („EU-US Privacy Shield“)</p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a></p>
            <p>garantiert Google, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden.</p>
            <p>Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu ermöglichen, wird bei Aufruf unseres Internetauftritts eine Verbindung zu dem Google-Server in den USA aufgebaut.</p>
            <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.</p>
            <p>Durch die bei Aufruf unseres Internetauftritts hergestellte Verbindung zu Google kann Google ermitteln, von welcher Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die Darstellung der Schrift zu übermitteln ist.</p>
            <p>Google bietet unter</p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://adssettings.google.com/authenticated">https://adssettings.google.com/authenticated</a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></p>
            <p>weitere Informationen an und zwar insbesondere zu den Möglichkeiten der Unterbindung der Datennutzung.</p>

            <h4>jQuery CDN</h4>
            <p>Zur Optimierung der Abrufgeschwindigkeit, der Gestaltung und Darstellung der Inhalte unseres Internetauftritts auf unterschiedlichen Endgeräten setzen wir in unserem Internetauftritt den Dienst</p>
            <p>jQuery CDN, ein Content Delivery Network („CDN“), ein. Hierbei handelt es sich um einen Dienst der jQuery Foundation, nachfolgend nur „jQuery“ genannt. jQuery wird für die JS Foundation über das StackPath CDN verteilt.</p>
            <p>Um die Inhalte unseres Internetauftritts schnell ausliefern zu können, greift der Dienst auf sog. JavaScript-Bibliotheken zurück. Dabei werden entsprechende Dateien von dem CDN-Server geladen, soweit sie nicht schon durch einen Besuch eines anderen Internetauftritts in Ihrem Browser-Cache vorhanden sind. Im Falle der Verbindung zu dem CDN-Server wird Ihre IP-Adresse erfasst. Dabei kann nicht ausgeschlossen werden, dass eine Verbindung zu einem Server außerhalb der EU erfolgt.</p>
            <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Beschleunigung der Ladezeiten unseres Internetauftritts sowie in dessen Optimierung.</p>
            <p>Um die Ausführung des Java-Script-Codes von jQuery insgesamt zu verhindern, können Sie einen sog. Java-Script-Blocker installieren, wie bspw. noscript.net oder ghostery.com. Sollten Sie die Ausführung des Java-Script-Codes verhindern oder einschränken, kann dies aus technischen Gründen allerdings dazu führen, dass womöglich nicht sämtliche Inhalte und Funktionen unseres Internetauftritts verfügbar sind.</p>

            <p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html">Muster-Datenschutzerklärung</a> der <a target="_blank" rel="noopener noreferrer" href="https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html">Anwaltskanzlei Weiß &amp; Partner</a></p>

        </div>
    )
}

export function DataPrivacyEN(){
    return(
        <div className="datenschutz"> 
            <Link to="/" className="data-back-main">X</Link>   
            <Link to="/datenschutz">Datenschutzerklärung in Deutsch</Link>            
            <h2>Privacy Policy</h2>
            <p>Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.</p>
            <p>Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.</p>
            <p>The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.</p>
            <p>Our privacy policy is structured as follows:</p>
            <p>I. Information about us as controllers of your data<br></br>II. The rights of users and data subjects<br></br>III. Information about the data processing</p>
            <h3>I. Information about us as controllers of your data</h3>
            <p>The party responsible for this website (the "controller") for purposes of data protection law is:</p>
            <p><span className="address">Lars-Peter Feigl</span><br></br><span className="address">Fliederbusch 54</span><br></br><span className="address">52355 Düren</span><br></br><span className="address">Germany</span></p>
            <p><span className="address">Telephone: 0176 619 905 97</span><br></br><span className="address">Email: gameslpf0@gmail.com</span></p>
            <p>The controller's data protection officer is:</p>
            <p><span className="address">Lars-Peter Feigl</span></p>
            <h3>II. The rights of users and data subjects</h3>
            <p>With regard to the data processing to be described in more detail below, users and data subjects have the right</p>
            <ul type="disc">
            <li>to confirmation of whether data concerning them is being processed, information about the data being processed, further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);</li>
            <li>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</li>
            <li>to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;</li>
            <li>to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR);</li>
            <li>to file complaints with the supervisory authority if they believe that data concerning them is being processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).</li>
            </ul>
            <p>In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a right to information about these recipients.</p>
            <p><strong>Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose of direct advertising is permissible.</strong></p>
            <h3>III. Information about the data processing</h3>
            <p>Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise stipulated below.</p>

            <h4>Server data</h4>
            <p>For technical reasons, the following data sent by your internet browser to us or to our server provider will be collected, especially to ensure a secure and stable website: These server log files record the type and version of your browser, operating system, the website from which you came (referrer URL), the webpages on our site visited, the date and time of your visit, as well as the IP address from which you visited our site.</p>
            <p>The data thus collected will be temporarily stored, but not in association with any other of your data.</p>
            <p>The basis for this storage is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the improvement, stability, functionality, and security of our website.</p>
            <p>The data will be deleted within no more than seven days, unless continued storage is required for evidentiary purposes. In which case, all or part of the data will be excluded from deletion until the investigation of the relevant incident is finally resolved.</p>

            <h4>Cookies</h4>
            <h5>a) Session cookies</h5>
            <p>We use cookies on our website. Cookies are small text files or other storage technologies stored on your computer by your browser. These cookies process certain specific information about you, such as your browser, location data, or IP address. &nbsp;</p>
            <p>This processing makes our website more user-friendly, efficient, and secure, allowing us, for example, to display our website in different languages or to offer a shopping cart function.</p>
            <p>The legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR, insofar as these cookies are used to collect data to initiate or process contractual relationships.</p>
            <p>If the processing does not serve to initiate or process a contract, our legitimate interest lies in improving the functionality of our website. The legal basis is then Art. 6 Para. 1 lit. f) GDPR.</p>
            <p>When you close your browser, these session cookies are deleted.</p>
            <h5>b) Third-party cookies</h5>
            <p>If necessary, our website may also use cookies from companies with whom we cooperate for the purpose of advertising, analyzing, or improving the features of our website.</p>
            <p>Please refer to the following information for details, in particular for the legal basis and purpose of such third-party collection and processing of data collected through cookies.</p>
            <h5>c) Disabling cookies</h5>
            <p>You can refuse the use of cookies by changing the settings on your browser. Likewise, you can use the browser to delete cookies that have already been stored. However, the steps and measures required vary, depending on the browser you use. If you have any questions, please use the help function or consult the documentation for your browser or contact its maker for support. Browser settings cannot prevent so-called flash cookies from being set. Instead, you will need to change the setting of your Flash player. The steps and measures required for this also depend on the Flash player you are using. If you have any questions, please use the help function or consult the documentation for your Flash player or contact its maker for support.</p>
            <p>If you prevent or restrict the installation of cookies, not all of the functions on our site may be fully usable.</p>

            <h4>Contact</h4>
            <p>If you contact us via email or the contact form, the data you provide will be used for the purpose of processing your request. We must have this data in order to process and answer your inquiry; otherwise we will not be able to answer it in full or at all.</p>
            <p>The legal basis for this data processing is Art. 6 Para. 1 lit. b) GDPR.</p>
            <p>Your data will be deleted once we have fully answered your inquiry and there is no further legal obligation to store your data, such as if an order or contract resulted therefrom.</p>

            <h4>Google Fonts</h4>
            <p>Our website uses Google Fonts to display external fonts. This is a service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).</p>
            <p>Through certification according to the EU-US Privacy Shield</p>
            <p><a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active" target="_blank" rel="noopener noreferrer">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a></p>
            <p>Google guarantees that it will follow the EU's data protection regulations when processing data in the United States.</p>
            <p>To enable the display of certain fonts on our website, a connection to the Google server in the USA is established whenever our website is accessed.</p>
            <p>The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the optimization and economic operation of our site.</p>
            <p>When you access our site, a connection to Google is established from which Google can identify the site from which your request has been sent and to which IP address the fonts are being transmitted for display.</p>
            <p>Google offers detailed information at</p>
            <p><a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">https://adssettings.google.com/authenticated</a></p>
            <p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></p>
            <p>in particular on options for preventing the use of data.</p>

            <h4>jQuery CDN</h4>
            <p>We use the service jQuery CDN, a Content Delivery Network ("CDN"), on our website to optimise the retrieval speed, the design and presentation of the content of our website on different devices.&nbsp;</p>
            <p>This is a service of the jQuery Foundation, hereinafter referred to as "jQuery". jQuery is distributed for the JS Foundation via the StackPath CDN.</p>
            <p>In order to be able to deliver the content of our website quickly, the service uses so-called JavaScript libraries.&nbsp; Relevant files are loaded from the CDN server if they are not already available in your browser cache when you visit another website.&nbsp; In the case of a connection to the CDN server, your IP address is recorded.&nbsp; It cannot be ruled out that a connection will be established to a server outside the EU.</p>
            <p>The legal basis is Art.&nbsp; 6 para. 1 lit. f) GDPR. Our legitimate interest lies in speeding up loading times and protecting our website, as well as in analysing and optimising our website.</p>
            <p>To totally prevent the execution of jQuery’s JavaScript code, you can install a so-called JavaScript blocker, such as noscript.net or ghostery.com. . If you were to prevent or restrict the execution of the Java Script code, this can mean that for technical reasons not all the content and functions of our website may be available.</p>

            <p><a href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html" target="_blank" rel="noopener noreferrer">Model Data Protection Statement</a> for <a href="https://www.ratgeberrecht.eu/" target="_blank" rel="noopener noreferrer">Anwaltskanzlei Weiß &amp; Partner</a></p>

        </div>
    )
}