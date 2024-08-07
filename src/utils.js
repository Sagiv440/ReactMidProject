import axios from "axios";

const getAll = (url) => axios.get(url);

const getById =(url, id) => axios.get (`${url}/${id}`);

const addItem = (url, obj) => axios.post(url, obj);

const updateItem = (url, id, obj) => axios.put(`${url}/${id}`, obj);

const deleteItem = (url, id) => axios.delete(`${url}/${id}`);

const NewId = (data)=>
    {
      let Id = 0;
      for(let i = 0; i < data.length; i++)
        {
          if(data[i].id > Id)
          {
            Id = data[i].id;
          }
        }
      return Id + 1;
    }

export { getAll, getById, addItem, updateItem, deleteItem , NewId };

