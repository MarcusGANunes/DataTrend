import "bootstrap";
import { useState, useEffect } from "react";
import "./crowdfundingTable.modules.css";

export default function CrowdfundingTable() {

  const empresas = [
    {
      id: 1,
      CNPJ: "XXXXXX",
      name: "name",
      city: "cidade",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 2,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 3,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 4,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 5,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 6,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 7,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 8,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 9,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 10,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 11,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 12,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 13,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 14,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 15,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 16,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 17,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 18,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 19,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 20,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 21,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 22,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
    {
      id: 23,
      CNPJ: "XXXXXX",
      name: "name",
      city: "city",
      show: true,
      site: "www.example.com",
      price: "R$20,00",
    },
  ];

  const [traders, setTraders] = useState(empresas);
  const [search, setSearch] = useState('')
  const [filtered, isFiltered] = useState(false)

  function addRemoveBusiness(newElement) {
    const newTraders = traders.map(x => {
      return x.id === newElement.id ? { ...x, chosen: !x.chosen } : x;
    });
    setTraders(newTraders);
  }

  return (
    <>
      <div className="filter">
        Filtre pela cidade:
        <input
          className="input"
          placeholder="Busca por cidade"
          value={search}
          onChange={e => {
            setSearch(e.target.value)
          }}
        />
      </div>
      <table class="table table-striped table-hover align-middle">
        <thead>
          <tr id="option">
            <th scope="col">ID</th>
            <th scope="col">CNPJ</th>
            <th scope="col">Razão Social</th>
            <th scope="col">Cidade</th>
            <th scope="col">Website</th>
            <th scope="col">Preço (MWh)</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody key={filtered ? "filter" : ""}>
          {traders
          .filter(x => x.city.toLowerCase().includes(search.toLowerCase()))
          .map((x) => {
            return (
              <>
                {x.show &&
                  <tr id="option">
                    <th scope="row" id={x.id}>
                      {x.id}
                    </th>
                    <td>{x.CNPJ}</td>
                    <td>{x.name}</td>
                    <td>{x.city}</td>
                    <td>{x.site}</td>
                    <td>{x.price}</td>
                    <td><span id={x.chosen === true ? 'button-selected' : 'button-unselected'} onClick={() => { addRemoveBusiness(x) }} type="button">Adicionar/Remover</span></td>
                  </tr>}
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}