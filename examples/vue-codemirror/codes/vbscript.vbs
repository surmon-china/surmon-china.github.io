' Pete Guhl
' 03-04-2012
'
' Basic VBScript support for codemirror2

Const ForReading = 1, ForWriting = 2, ForAppending = 8

Call Sub020_PostBroadcastToUrbanAirship(strUserName, strPassword, intTransmitID, strResponse)

If Not IsNull(strResponse) AND Len(strResponse) = 0 Then
	boolTransmitOkYN = False
Else
	' WScript.Echo "Oh Happy Day! Oh Happy DAY!"
	boolTransmitOkYN = True
End If
