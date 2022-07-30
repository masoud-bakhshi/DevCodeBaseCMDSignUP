import React , {useState , useEffect , useRef} from "react";
import CommandLine from 'react-command-line';
const CmdP = () => {
  const messages = {
    'WELCOME_MESSAGE': '...',
    'INVALID_COMMAND': 'Shit head, just write correct input or you can write help'
  }
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [placeholder, setPlaceholder] = React.useState('');
  const [helpSt, setHelpSt] = React.useState(false);
  const [helpMU, setHelpMU] = React.useState('');
const helpM=`Supported commands: 
username [args]: Example: username aghmasoud
password [args]: Example: password 123.
sleep: Waits for 5 seconds, then returns with a message.`
  const
    string = 'Hey Gorgeous... just write something dummy.',
    index = React.useRef(0),
    indexH = React.useRef(0);
  React.useEffect(() => {
    function tick() {
      setPlaceholder(prev => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(tick, 200);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  // React.useEffect(() => {
  //   function tick1() {
  //     setHelpMU(prev1 => prev1 + helpM[indexH.current]);
  //     indexH.current++;
  //   }
  //   if (indexH.current < helpM.length) {
  //     let addChar1 = setInterval(tick1, 200);
  //     return () => clearInterval(addChar1);
  //   }
  // }, [helpMU]);
  // const [mess, setMess] = useState({
  //   'WELCOME_MESSAGE': '',
  //   'INVALID_COMMAND': 'Shit head, just write correct input or you can write help'
  // });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setMess(mess => mess + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
//   for (var i=0; i < 100; i++) {
//     //********************** */
//  function tick1() {
//    setHelpMU(prev1 => prev1 + helpM[indexH.current]);
//    indexH.current++;
//  }
//  if (indexH.current < helpM.length) {
//    let addChar1 = setInterval(tick1, 200);
//    return () => clearInterval(addChar1);
//  }
 
// //**************************** */
// } 


  
      const commands = {
        help: {
          fn: args => {
         
           
          return helpM
          }
        },
        username: {
          fn: args => {
            setUsername(args.join(', '))
            return `username: [${args.join(', ')}]`;
          }
        },
        password: {
            fn: args => {
              setPassword(args.join(', '))
              // return `password: [${args.join(', ')}]`;
              return `password: [***]`;
            }
          },
        sleep: {
          fn: args => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve('done!');
              }, 5000);
            });
          },
          isAsync: true
        }
      }
      
      
  return (
    <div style={{background:"#000000" , color:"#ffff", width:window.innerWidth , height:window.innerHeight}} >
     
     {placeholder}
     {username}
     {password}
     <CommandLine commands={commands} messages={messages} />
     
    </div>
  );
};

export default CmdP;



