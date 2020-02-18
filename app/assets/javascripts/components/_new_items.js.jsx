window.NewItem = createReactClass({
    render() {
      return (
        <div>
          <input ref={this.name} placeholder='Enter the name of the item' />
          <input ref={this.description} placeholder='Enter a description' />
          <button>Submit</button>
        </div>
      );
    }
});