import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  // cart item, name of state, setCart changes that state
  // eslint-disable-next-line no-undef
  // const [cartItems, setCartItems] = useState([]);
  const [scrollDepth, setScrollDepth] = useState(0);

  function determineUserScrollDepth() {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    setScrollDepth(scrolled);
  }

  useEffect(() => {
    window.addEventListener('scroll', determineUserScrollDepth);
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <p>Items in your card : {cartItems.toString()}</p>
        <button
          onClick={() => {
            setCartItems([...cartItems, 'apple']);
            console.log(cartItems);
          }}
        >
          Add to Cart
        </button> */}
        <p> You've scrolled this far : {Math.round(scrollDepth)}</p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          varius, turpis consequat luctus consectetur, tellus elit sodales quam,
          eu malesuada ligula leo vel ligula. Suspendisse tincidunt orci at
          tempor iaculis. Quisque eleifend pretium sem vel ullamcorper. Quisque
          tempor felis nunc, et rhoncus velit dictum sed. Nam placerat vehicula
          ipsum. Maecenas commodo tortor eget dignissim euismod. Nullam at lorem
          dui. Nullam mollis consectetur pellentesque. Sed iaculis nibh ut est
          varius, sit amet interdum tortor luctus. Etiam pulvinar mi quis porta
          porttitor. Mauris vestibulum, neque sit amet sollicitudin feugiat,
          tortor massa rutrum mi, nec convallis sapien libero sit amet neque.
          Phasellus cursus pulvinar turpis, ac mattis sapien pulvinar id. Etiam
          eget urna efficitur, consequat ex ut, vehicula ante. Aenean a
          hendrerit ante. Proin at blandit lacus, consectetur rutrum augue.
          Nullam eu nunc felis. Donec porta neque aliquet nisl congue, nec
          feugiat turpis viverra. Donec vitae ex augue. Sed condimentum sem sed
          eleifend euismod. Donec sed accumsan sem. Nullam vel mauris nec velit
          eleifend vulputate eget vel felis. Quisque semper lectus sit amet
          lectus tristique, et varius dui bibendum. Vivamus vel tristique sem.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          finibus, quam consectetur volutpat semper, est purus bibendum ligula,
          quis imperdiet quam urna quis tortor. Nunc posuere mauris felis, et
          consequat elit tincidunt sed. Nam sagittis, enim ac laoreet porta,
          dolor sapien imperdiet dolor, eu semper purus lorem a sem. Donec
          sagittis sagittis quam sed sagittis. Fusce condimentum, risus nec
          varius pellentesque, erat nisl hendrerit ipsum, ac cursus nulla turpis
          et quam. Integer blandit tellus cursus felis hendrerit, sit amet
          accumsan libero placerat. Nullam finibus arcu vel sem semper, ut
          aliquet elit gravida. Cras vel dignissim dolor. Proin pharetra tellus
          ligula. Nam congue auctor neque. Mauris vulputate placerat nisl, vel
          vulputate nisl aliquet a. Sed tempor pellentesque lacinia. Curabitur
          vel vestibulum libero. Nulla imperdiet eleifend eros, non posuere mi
          ultricies eu. Cras arcu justo, pulvinar ut felis nec, eleifend
          dignissim quam. Fusce et tincidunt quam, id mattis mauris. Integer
          vitae convallis orci. Nullam rhoncus massa et tempor pretium. Morbi in
          vestibulum massa. In facilisis, ante eu condimentum rutrum, elit diam
          pharetra odio, nec ornare ligula velit eu eros. Morbi luctus sed eros
          eget pharetra. Nunc id nisl in ipsum iaculis efficitur ut mollis nisi.
          Nulla ac lorem in urna maximus iaculis. Morbi placerat, augue id
          lacinia tincidunt, nibh felis efficitur est, at ullamcorper tellus
          nibh et urna. Vestibulum purus mi, rutrum sed varius at, luctus ut
          justo. Nam vestibulum mauris nec diam semper pharetra. Pellentesque ac
          aliquet dolor, nec venenatis lorem. Interdum et malesuada fames ac
          ante ipsum primis in faucibus.
        </p>
      </header>
    </div>
  );
}
