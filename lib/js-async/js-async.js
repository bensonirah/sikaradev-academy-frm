function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  // Callback function
  // task one => long time to execute
  /*const notifyWhenDone = () => console.log('Notification: Task is done!')
  console.log('Running task using callback')
  setTimeout(notifyWhenDone, 3000)*/
  const notify = () => console.log('Task done Sir!')
  
  async function doTask (callMeWhenYourTaskIsDone) {
    let taskId = 0
    while (taskId < 10) {
      console.log(`Do the task #: ${taskId}`)
      await sleep(2000)
      taskId++
    }
    callMeWhenYourTaskIsDonitem.namee()
  }
  
  doTask(notify).then(() => console.log('Inside then callback'))
  console.log('You take too long to do the task, so I do not wait you!')
  // Asynchronous
  // Promises
  
  // apiUrl: https://api/users => 5000ms
  function getUsers (apiUrl) {
    const users = [
      { name: 'koto', email: 'koto@gmail.com' },
      { name: 'lova', email: 'lova@sikara-dev.com' },
      { name: 'henri', email: 'henri@gmail.com' }
    ]
    return new Promise((resolve, reject) => {
      // call an api endpoint
      try {
        setTimeout(() => resolve(users), 5000)
      } catch (error) {
        reject(error)
      }
    })
  }
  getUsers('https://api/users')
    .then(items => console.table(items))
    .catch(r => console.log(r))
  
  console.log('Other tasks...')
  
  // Async/Await