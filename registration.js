document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault()
    var details={
FullName:'',
EmailID:'',
DOB:'',
Gender:'',
Address:'',
Aadhar:'',
Panno:'',
sscboard:'',
sscyear:'',
sscper:'',
interboard:'',
interyear:'',
interper:'',
ugboard:'',
ugyear:'',
ugper:'',
phnno:''
    }
    details.FullName=document.getElementById('fname').value
    details.EmailID=document.getElementById('email').value
    details.DOB=document.getElementById('db').value
    details.Gender=document.getElementById('gen2').value
    details.Aadhar=document.getElementById('num').value
    details.Panno=document.getElementById('pn').value
    details.Address=document.getElementById('add').value
    details.sscboard=document.getElementById('text1').value
    details.sscyear=document.getElementById('ssc').value
    details.sscper=document.getElementById('marks').value
     details.phnno=document.getElementById('phn').value
     details.interboard=document.getElementById('text2').value
     details.interyear=document.getElementById('inter').value
     details.interper=document.getElementById('marks2').value
     details.ugboard=document.getElementById('text3').value
     details.ugyear=document.getElementById('ug').value
     details.ugper=document.getElementById('marks3').value
 buildresume(details)
})
function buildresume(details){
    document.getElementById('name').innerHTML=details.FullName
     document.getElementById('em').innerHTML=details.EmailID
     document.getElementById('dob').innerHTML=details.DOB
     document.getElementById('gen').innerHTML=details.Gender
     document.getElementById('ad').innerHTML=details.Address
      document.getElementById('aadh').innerHTML=details.Aadhar
      document.getElementById('pan').innerHTML=details.Panno
     document.getElementById('tenth').innerHTML=details.sscboard
     document.getElementById('year1').innerHTML=details.sscyear
     document.getElementById('point1').innerHTML=details.sscper
      document.getElementById('ph').innerHTML=details.phnno
      document.getElementById('twelve').innerHTML=details.interboard
     document.getElementById('year2').innerHTML=details.interyear
     document.getElementById('point2').innerHTML=details.interper
    document.getElementById('grad').innerHTML=details.ugboard
 document.getElementById('year3').innerHTML=details.ugyear
 document.getElementById('point3').innerHTML=details.ugper

 document.getElementById('div').style.visibility='visible'
}

