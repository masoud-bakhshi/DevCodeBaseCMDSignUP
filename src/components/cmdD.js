import React , {useState , useEffect , useRef} from "react";
// import CommandLine from 'react-command-line';
import CommandL from "./CommandLineComponent"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

function CmdD() {
  // promptRef = React.createRef();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClose = () => {
    setOpen(false);
  };
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
          hi: {
            fn: args => {
              // setUsername(args.join(', '))
              return `you have no idea how to work with this app, right? for god sake just write -help- dick head `;
            }
          },
          // masoudbakhshi: {
          //   fn: args => {
             
          //     return `what do you want?`;
          //   }
            
          // },
          // masoudbakhshi: {
          //   fn: args => {
          //     return new Promise((resolve, reject) => {
          //       // resolve('what do you want?');
          //       setTimeout(() => {
          //         resolve('done!');
          //       }, 5000);
          //     });
          //   },
            
          // },
        //   masoud: {
        //     fn: args => {
        //       return new Promise((resolve, reject) => {
        //         // resolve('hi')
        //         // print('bingo!');
        //         setTimeout(() => {
        //           resolve('done!');
        //         }, 5000);
              
        //       });
        //     },
            
        //   },
        masoud: {
          fn: (args1 ) => {
            // setUsername(args.join(', '))
            return `masoud: [${args1.join(', ')}] , [${args2.join(', ')}]`;
          },
        
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
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title"></DialogTitle>

        <DialogContent>
          {/* <SignIn setOpen={setOpen} /> */}
          {/* <Button autoFocus onClick={handleClose} color="primary">
            close
          </Button> */}
           <div style={{background:"#000000" , color:"#ffff", width: 400 , height: 600}} >
     
     {placeholder}

     <CommandL commands={commands} messages={messages} />
     
    </div>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default CmdD;
