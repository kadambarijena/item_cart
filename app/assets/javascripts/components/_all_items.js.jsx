window.AllItems = createReactClass({
    getInitialState() {
      return { items: [] }
    },
  
    componentDidMount() {
      $.getJSON('/api/v1/items.json', (response) => { 
        console.log('data fetched')
        this.setState({ items: response })
        console.log('render should be called again after setState')

      });
    },

    render() {
      console.log('inside render')

      var items = this.state.items.map( (item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        )
      });
    
      return (
        <div>
          {items}
        </div>
      );
    }

  });