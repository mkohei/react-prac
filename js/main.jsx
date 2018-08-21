class A extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
        this.state = { list: [] }
        this.addToList = this.addToList.bind(this)

        console.log(props)
    }

    componentDidMount() {
        this.props.data.A = this;
    }
    componentWillUnmount() {
        delete this.props.data.A;
    }

    addToList(A) {
        //this.state.list.push(A)
        this.state.list.unshift(A)
        this.setState({ list: this.state.list })
    }

    render() {
        return (
            <div>
                <h1>A</h1>
                <ul>
                    {this.state.list.map((a) => {
                        return <li>{a}</li>
                    })}
                </ul>
            </div>
        )
    }
}







/**
 * Main
 */
var count = 0;
let data = {};
ReactDOM.render(
    <A data={data}/>,
    document.getElementById("container")
);

document.getElementById("input-button").onclick = function() {
    const content = "[ " + count + " ] content (*^-^*) @";
    count++;

    console.log(data);
    let A = data.A;
    if (typeof A !== "undefined" && A !== null) {
        A.addToList(content);
    }
}