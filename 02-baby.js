var args = process.argv.slice(2);
console.log( args.reduce( (prev,curr) => { return Number(prev) + Number(curr) } ) );
