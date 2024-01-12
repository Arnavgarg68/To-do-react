import React  from 'react'
export default function Heading() {
  // const [quote, setQuote] = useState('');
  // const [mounted, setisMounted] = useState(true);
  // const quoteurl = "https://api.api-ninjas.com/v1/quotes";
  // const apikey = "sK7jt/zqnnq2hsgj+AQosQ==qUag6oj5lDLmmspe";
  // const fetchdata = async () => {
  //   try {
  //     const response = await fetch(quoteurl, {
  //       headers: {
  //         'X-Api-Key': apikey
  //       },
  //     });
  //     if (response.ok&&mounted) {
  //       const result = await response.json();
  //       console.log(result);
  //       setQuote(result[0])
  //     }
  //     else {
  //       console.error('Error: ', await response.text());
  //     }
  //   }
  //   catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  // useEffect(()=>{
  //   fetchdata();

  //   return ()=>{setisMounted(false);}
  // },[])
  
  return (
    <div className="container">
      <h1>To-Do</h1>
      {/* <div className="quote">{quote.quote}</div> */}
    </div>
  )
}
