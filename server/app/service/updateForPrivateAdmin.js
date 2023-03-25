export const updateForPrivateAdmin = async (data) => {
    const users = data.users;
    console.log(users.length);
    const cnt = new Map();
    
    for(let i=0;i<users.length;i++)
    {
      let name=users[i].email;
      // console.log(name)
      cnt.set(name, cnt.get(name) + 1 || 1);
    }
  
    let newUsers=[];
    for (let i = 0; i < users.length; i++) {
      let name = users[i].email;
      let x=cnt.get(name);
      if(x==1)
      {
        newUsers.push(users[i]);
      }
    }
  
  
  
  
    
    return { users: newUsers };
  };