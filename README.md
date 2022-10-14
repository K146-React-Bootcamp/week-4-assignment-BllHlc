- # Class Component Example

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

- # React class component nedir?

React kütüphanesi içerisindeki “Component” class ‘ından extend olan javascript class ‘ları olarak tanımlayabiliriz. Bu class ‘lar React Component ‘ten extend olduğu için Component Lifecycle süreçlerini de barındırır.

- # React class component lifecycle nedir?

React class component lifecycle, React class component ‘lerinin oluşturulması, güncellenmesi ve yok edilmesi süreçleridir. Bu süreçlerin her biri birer metottur. Bu metotlar React Component ‘ten extend olduğu için Component Lifecycle süreçlerini de barındırır.

- # React class component lifecycle metotları nelerdir?

render() metodu, React component ‘in render edilmesi için kullanılır. Bu metot, React component ‘in render edilmesi için zorunlu bir metottur.

componentDidMount() metodu, React component ‘in DOM a mount edildikten sonra çalışır. Bu metot, React component ‘in render edilmesi için zorunlu bir metottur.

componentDidUpdate() metodu, React component ‘in güncellenmesi durumunda çalışır. Bu metot, React component ‘in render edilmesi için zorunlu bir metottur.

componentWillUnmount() metodu, React component ‘in DOM a mount edildikten sonra çalışır. Bu metot, React component ‘in render edilmesi için zorunlu bir metottur.

- # React functional component nedir?

React kütüphanesi içerisindeki “Component” class ‘ından extend olmayan javascript function ‘ları olarak tanımlayabiliriz. Bu function ‘lar React Component ‘ten extend olmadığı için Component Lifecycle süreçlerini de barındırmaz.

- # React functional component lifecycle nedir?

React functional component lifecycle, React functional component ‘lerinin oluşturulması, güncellenmesi ve yok edilmesi süreçleridir. Bu süreçlerin her biri birer metottur. Bu metotlar React Component ‘ten extend olmadığı için Component Lifecycle süreçlerini de barındırmaz.

- # React functional component lifecycle metotları nelerdir?

useState - Component ‘in oluşturulması sırasında çalışır. Component ‘in oluşturulması sırasında state ve props değerlerinin set edilmesi için kullanılır.

useEffect - Component ‘in güncellenmesi sırasında çalışır. Component ‘in güncellenmesi sırasında API çağrıları, event listener tanımlamaları, DOM manipülasyonları gibi işlemler için kullanılır.

- # Niçin Function componentler class componenterinin yerini aldı?

Performans artışı sağlar. Class componentlerin lifecycle metotları, state ve props değerlerinin güncellenmesi durumunda component ‘in tekrar render edilmesine neden olur. Bu durumda component ‘in tekrar render edilmesi gereksiz işlem olarak görülür. Bu nedenle performans artışı sağlamak için function componentler kullanılır.
