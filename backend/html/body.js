const getBody = (content_title,content_content)=>{
    return `
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
    <tbody>
    <tr>
        <!-- VAR:IMAGE -->
        <td align="center" valign="top"
            style="background:#f7f7f7 none no-repeat 50% 50%/cover;background-color:#f7f7f7;padding-top:20px;padding-bottom:20px">
            <img align="center" alt="" width="60%"
                 style="padding-bottom:0;display:inline!important;vertical-align:bottom;border:0;height:auto;outline:none;text-decoration:none"
                 src="https://i.ibb.co/vm1XCsD/Header.png">
        </td>
    </tr>
    <tr>
        <td align="center" valign="top"
            style="background:#ffffff none no-repeat center/cover;background-color:#ffffff;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:36px;padding-bottom:54px">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                   style="border-collapse:collapse;max-width:600px!important">
                <tbody>
                <tr>
                    <td valign="top"
                        style="background:transparent none no-repeat center/cover;background-color:transparent;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:0;padding-bottom:0">
                        <!-- VAR:TITLE -->
                        <table align="left" border="0" cellpadding="0" cellspacing="0"
                               style="max-width:100%;min-width:100%;border-collapse:collapse" width="100%">
                            <tbody>
                            <tr>
                                <td valign="top"
                                    style="padding-top:0;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#757575;font-family:Helvetica;font-size:16px;line-height:150%;text-align:left">
                                    <h1 style="display:block;margin:0;padding:0;color:#222222;font-family:Helvetica;font-size:40px;font-style:normal;font-weight:bold;line-height:150%;letter-spacing:normal;text-align:center">
                                        <br>${content_title}</h1>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <!-- VAR:CONTENT -->
                        <p style="margin:20px 0;padding:0;color:#757575;font-family:Helvetica;font-size:16px;line-height:150%;text-align:left">
                            ${content_content}
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>

        </td>
    </tr>
    <tr>
        <!-- VAR:IMAGE -->
        <td align="center" valign="top"
            style="background:#f7f7f7 none no-repeat 50% 50%/cover;background-color:#f7f7f7;padding-top:20px;padding-bottom:20px">
            <img align="center" alt="" width="60%"
                 style="padding-bottom:0;display:inline!important;vertical-align:bottom;border:0;height:auto;outline:none;text-decoration:none"
                 src="https://i.ibb.co/MsbL4GH/Footer.png">
        </td>
    </tr>
    <tr>
        <td align="center" valign="top" id="m_68048331406078138m_2589327187714793890templateFooter"
            style="background:#333333 none no-repeat center/cover;background-color:#333333;background-image:none;background-repeat:no-repeat;background-position:center;background-size:cover;border-top:0;border-bottom:0;padding-top:45px;padding-bottom:63px">
            <table align="left" border="0" cellpadding="0" cellspacing="0"
                   style="max-width:100%;min-width:100%;border-collapse:collapse" width="100%">
                <tbody>
                <tr>

                    <td valign="top"
                        style="padding-top:0;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#ffffff;font-family:Helvetica;font-size:12px;line-height:150%;text-align:center">
                        <em>Copyright 2021 New Zealand Physics and Mathematics Competition, All rights reserved.</em>
                        <br> You are receiving this email because you registered for this competition
                        <br><br>
                        <br>

                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>

    </tbody>
</table>
    `
}

module.exports = {
    getBody: getBody
}