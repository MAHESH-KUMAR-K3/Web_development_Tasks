let students=[
    {id:1,s_name:'Mahesh',city:'hyderabad'},
    {id:2,s_name:'Maheswari',city:'Kakinaada'},
    {id:3,s_name:'manasa',city:'Kochi'},
    {id:4,s_name:'Harsha',city:'Bangluru'},
    {id:5,s_name:'Madhu',city:'Mumbai'},
    {id:1,s_name:'Ganesh',city:'New Delhi'}

]
console.log(`OUTPUT FOR USING FOR IN LOOP`)
for(let i in students){
    console.log(`${students[i].s_name} from ${students[i].city}`)
}

console.log(`OUTPUT FOR USING FOR OF LOOP`)
for(let i of students){
    console.log(`${i.s_name} from ${i.city}`)
}