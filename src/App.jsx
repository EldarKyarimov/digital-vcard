function App() {
  return (
    <div>
      <h2>My Virtual Card</h2>
      <h3>Rəqəmsal QR karta məzmun əlavə edin</h3>
      <div>
        <h4>QR kodunuza ad verin</h4>
        <input placeholder="m.u. mənim ilk QR kodum" />
      </div>

      <div>
        <h3>Dizayn edin və fərdiləşdirin</h3>
        <h4>Rəng sxeminizi seçin</h4>
        <div>
          <p>Exaples for themes</p>
          <p>Primary color</p>
          <p>secondary color</p>
        </div>
      </div>

      <div>
        <h3>Sizin haqqınızda</h3>
        <h4>vCard-da göstərmək istədiyiniz məlumatları doldurun</h4>

        <div>
          <h3>Şəxsi məlumat</h3>

          <h4>Ad</h4>
          <input placeholder="m.u. Aysel" />

          <h4>Soyad</h4>
          <input placeholder="m.u. Nuriyeva" />

          <h4>Şəkil</h4>
          <input placeholder="place for upload image" />
        </div>

        <div>
          <h3>Əlaqə məlumatları</h3>

          <h4>Telefon nömrəsi</h4>
          <input placeholder="m.u. +994(50)500-05-05" />

          <h4>Email</h4>
          <input placeholder="m.u. ms.lale@gmail.com" />

          <h4>Şəxsi website</h4>
          <input placeholder="m.u. lale.com" />
        </div>

        <div>
          <h3>Şirkət məlumatları</h3>

          <h4>Şirkət adi</h4>
          <input placeholder="m.u. menim Şirkətim" />

          <h4>Peşə</h4>
          <input placeholder="m.u. Dizayner" />
        </div>


      </div>
    </div>
  )
}

export default App
