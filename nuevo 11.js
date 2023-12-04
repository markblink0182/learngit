let rest = {}
const getBase64FromUrl = async () => {
    var userOFSC    = '8a3ec2b3641593a3925e6490bc284dae68f09936@izzifso20201.test';
    var pwdOFSC     = 'd1af1a86f2247c55ec9570e08a9d4289bc76300f1264f83a00723e290542';
    var url         = 'https://izzifso2020.etadirect.com/rest/ofscCore/v1/activities/104930/XA_CUSTOMER_SIGNATURE';
	var credentials = userOFSC+':'+pwdOFSC;
    var encoded     = window.btoa(credentials);
	
  const data = await fetch(url, {
        headers: {"Authorization": "Basic " + encoded, "Accept": 'application/octet-stream'}
        })
		
  const blob = await data.blob();
  
  
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = () => {
      const base64data = reader.result;  
		console.log(base64data)
		resolve(base64data);
	  
    }
  });
}


var promiseB = getBase64FromUrl().then(value => {
	rest.image = value
  })

console.log(rest)



	



