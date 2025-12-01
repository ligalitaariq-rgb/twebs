guid=["3781883813","288248484022","3183484801","2991991819","774349284742","518713619934","32761718946","13681111183"]
    ##		0			1				2			3			4				5				6				7		##
number=["08054861618","080517153517","090274164823","0703171468364","091524575442","081264314124","07125271889","091353181883"]
    ##		0				1				2			3					4			5				6				7		##
zrb=["ZRB__NEYMAR","ZRB__BOTTEGA","ZRB__LUCAS","ZRB__DEMON","ZRB__DIVIX","ZRB__XENON","ZRB__YAHMAL","ZRB__MAVRIX",]
    ##    0				1				2			3			4			5			6				7		##
ZRB=input("guids member name: ")
if ZRB.lower() == "neymar":
    t="UID: "+guid[2]+" Phone no: "+number[2]+ " FF NAME: " +zrb[0]
if ZRB.lower() == "bottega":
    t="UID: "+guid[0]+" Phone no: "+number[0]+ " FF NAME: " +zrb[1]
if ZRB.lower() == "demon":
    t="UID: "+guid[1]+" Phone no: "+number[1]+ " FF NAME: " +zrb[3]
if ZRB.lower() == "xenon":
    t="UID: "+guid[3]+" Phone no: "+number[3]+ " FF NAME: " +zrb[5]
if ZRB.lower() == "divix":
    t="UID: "+guid[4]+" Phone no: "+number[4]+ " FF NAME: " +zrb[4]
if ZRB.lower() == "lucas":
    t="UID: "+guid[5]+" Phone no: "+number[5]+ " FF NAME: " +zrb[2]
if ZRB.lower() =="zero__blood":
    t=str(guid)
if ZRB.lower() == "mavrix":
    t="UID: "+guid[6]+" Phone no: "+number[6]+ " FF NAME: " +zrb[7]
if ZRB.lower() == "yahmal":
    t="UID: "+guid[7]+" Phone no: "+number[7]+ " FF NAME: " +zrb[6]
print (t)