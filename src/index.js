//this and the last line of the doc will override the HTML form default behavior of refreshing when a submit input is clicked
const init = () => {

  //get the *form* DOM element and then add an event listener, and add a callback fx to handle the event (in this case stop it from refreshing)
  const inputForm = document.querySelector('form')
  //when event (using submit) is triggerred, callback fx will execute and (oreventDefault ) will not refresh
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    //event.target returns the DOM element targeted by our event, in this case <form>...</form>
    //event.target.children --> returns HTMLCollection containig all nestes elements of event.target element
    //event.target.children[indexYouWantToAccess] --> access the element 
    //event.target.children[indexYouWantToAccess].value --> what you input into the input (text box) and gets saved by submit button --> use to render the value into a div on the browser :)
    //console.log(event.target.children[1])

    //OR 

    //use below code to directly get the input and get its value by: input.value instead of that long line up there
    const input = document.getElementById('searchByID')
    console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
      })
      //consoles the three movies objects in the array
    //data.message.forEach(renderImages))

  })
}

document.addEventListener('DOMContentLoaded', init);