export const initialValues = {
    menuSelected: {
      name: "Home",
      icon: "house-fill",
      title: " Activity and DOCs",
      text: "You can see all your activity right here. If you prefer you can see all DOC to help you using this app.",
      route: "/home",
      cardinality: 0,
      show_title: false
  },
    setMenuSelected: () => {},
    pricing: [],
    setPricing: () => { },
    displaySelected:'',
    setDisplaySelected: () => { },
    displayGraphic:'',
    setDisplayGraphic: () => { },
    displayCollection:'',
    setDisplayCollection: () => { },
    collectionData:[],
    setCollectionData: () => { },
    modalCreateCollection:false, 
    setModalCreateCollection:() => { }
  }