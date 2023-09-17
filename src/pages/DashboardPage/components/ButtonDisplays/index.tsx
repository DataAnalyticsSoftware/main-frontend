import React, { useContext, useEffect } from 'react';
import { DashboardContext } from '../../context/DashboardContext';

export const ChooseDisplay = (props: any) => {
  const { displaySelected, setDisplaySelected } = useContext(DashboardContext);

    const handleDisplayClick = (display: string) => { 
    setDisplaySelected(display);
  };

  return (
    <div>
      <div style={{ justifyContent: 'left' }}>
        <button
          type="button"
          className="btn btn-primary mr-4"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        <i className="">{displaySelected}</i>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a onClick={() => handleDisplayClick('Display 1')} className="dropdown-item" href="#">
            Display 1
          </a>
          <a onClick={() => handleDisplayClick('Display 2')} className="dropdown-item" href="#">
            Display 2
          </a>
          <a onClick={() => handleDisplayClick('Display 3')} className="dropdown-item" href="#">
            Display 3
          </a>
          <a onClick={() => handleDisplayClick('Display 4')} className="dropdown-item" href="#">
            Display 4
          </a>
          <a onClick={() => handleDisplayClick('Display 5')} className="dropdown-item" href="#">
            Display 5
          </a>
          <a onClick={() => handleDisplayClick('Display 6')} className="dropdown-item" href="#">
            Display 6
          </a>
        </div>
      </div>
    </div>
  );
};

        