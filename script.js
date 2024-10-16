
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '07ebe3d805msh4d70769d3351f9dp169d02jsnfcf311672f59',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const button = document.querySelector('.btn');
const summary = document.querySelector('.summary');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.querySelector('#url').value;
  const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

  summary.innerText = "Please wait article is summarizing...."


  if(!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input)){
     summary.innerText = "Invalid URL !!! Please enter a valid Url"
    }
  else{

    fetch(url, options)
    .then(data => data.json())
    .then(data => {
      summary.innerText = data?.summary;
    }
    )
    .catch(error=>{console.log(error)})

    }

}

)  