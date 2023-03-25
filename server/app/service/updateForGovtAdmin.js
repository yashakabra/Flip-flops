export const updateForGovtAdmin = async (data) => {
    const users = data.users;
    console.log(users);
    console.log(users.length);
    const cnt_zero = new Map();
    const cnt_one = new Map();
    const cnt_two = new Map();
    const cnt_neg = new Map();
    for (let i = 0; i < users.length; i++) {
      let name = users[i].email;
      // console.log(name)
      const tt=users[i].statusCode;
      if (tt == 0) cnt_zero.set(name, cnt_zero.get(name) + 1 || 1);
      else if (tt == 1) cnt_one.set(name, cnt_one.get(name) + 1 || 1);
      else if (tt == 2) cnt_two.set(name, cnt_two.get(name) + 1 || 1);
      else if (tt == -1) cnt_neg.set(name, cnt_neg.get(name) + 1 || 1);
    }
    console.log(cnt_zero.size, cnt_one.size, cnt_two.size, cnt_neg.size, )
    let newUsers=[];
    const vis=new Map();
    for (let i = 0; i < users.length; i++) {
      let name = users[i].email;
      console.log(name);
      console.log(cnt_zero.get(name), cnt_one.get(name), cnt_two.get(name), cnt_neg.get(name))
      if (
        cnt_one.get(name) == 1 &&
        cnt_zero.get(name) == 1 &&
        cnt_two.get(name) == undefined &&
        cnt_neg.get(name) == undefined
        && vis.has(name)==0
      ) {
          vis.set(name,1)
          newUsers.push(users[i]);
          console.log("SEXXXXX ",users[i]);
      }
    }
    
  
  
    return { users: newUsers };
    // let emails = [];
    // for(let i=0;i<users.length;i++){
    //   let code = users[i].statusCode;
    //   if(code === 0){
    //     emails.push(users[i]);
    //   }
    // }
    // let tans = [];
    // for(let i=0;i<users.length;i++){
    //   let code = users[i].statusCode;
    //   if(code === 1){
    //     for(let j=0;j<emails.length;j++){
    //       if(emails[j].email === users[i].email){

    //       }
    //     }
    //   }
    // }
  };