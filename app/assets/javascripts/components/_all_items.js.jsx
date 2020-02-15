window.AllItems = createReactClass({
    getInitialState() {
      return { items: [] }
    },
  
    componentDidMount() {
      //console.log('ComponentDidMount');
      $.getJSON('/api/v1/items.json', function(response) { 
        this.setState({ items: response })
      });
    },

    render() {
      return (
        <div>
          <h1>All items component</h1>
        </div>
      );
    }

  });