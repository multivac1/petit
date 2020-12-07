import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryIcon = () => {
    return (
        <NavLink
            to="/categorias"
            activeClassName="navbar__selected--categories"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
            >
                <g id="category_icon" transform="translate(1 2)" fill="#f8faff">
                    <path
                        d="M 9.999899864196777 19.14979934692383 C 8.446820259094238 19.14979934692383 7.183300018310547 17.88628005981445 7.183300018310547 16.33320045471191 L 7.183300018310547 12.66660022735596 L 7.183300018310547 11.81659984588623 L 6.33329963684082 11.81659984588623 L 2.666699886322021 11.81659984588623 C 1.113619923591614 11.81659984588623 -0.1499001383781433 10.55307960510254 -0.1499001383781433 9 C -0.1499001383781433 7.446919918060303 1.113619923591614 6.18340015411377 2.666699886322021 6.18340015411377 L 6.33329963684082 6.18340015411377 L 7.183300018310547 6.18340015411377 L 7.183300018310547 5.333399772644043 L 7.183300018310547 1.666800022125244 C 7.183300018310547 0.1137199997901917 8.446820259094238 -1.149799942970276 9.999899864196777 -1.149799942970276 C 11.55297946929932 -1.149799942970276 12.81649971008301 0.1137199997901917 12.81649971008301 1.666800022125244 L 12.81649971008301 5.333399772644043 L 12.81649971008301 6.18340015411377 L 13.66650009155273 6.18340015411377 L 17.33309936523438 6.18340015411377 C 18.88617897033691 6.18340015411377 20.14970016479492 7.446919918060303 20.14970016479492 9 C 20.14970016479492 10.55307960510254 18.88617897033691 11.81659984588623 17.33309936523438 11.81659984588623 L 13.66650009155273 11.81659984588623 L 12.81649971008301 11.81659984588623 L 12.81649971008301 12.66660022735596 L 12.81649971008301 16.33320045471191 C 12.81649971008301 17.88628005981445 11.55297946929932 19.14979934692383 9.999899864196777 19.14979934692383 Z"
                        stroke="none"
                    />
                    <path id="sec-path"
                        d="M 9.999899864196777 18.29980087280273 C 11.08428955078125 18.29980087280273 11.9665002822876 17.41758918762207 11.9665002822876 16.33320045471191 L 11.9665002822876 12.66660022735596 L 11.9665002822876 10.96660041809082 L 13.66650009155273 10.96660041809082 L 17.33309936523438 10.96660041809082 C 18.41749000549316 10.96660041809082 19.2996997833252 10.08438968658447 19.2996997833252 9 C 19.2996997833252 7.915609836578369 18.41749000549316 7.033400058746338 17.33309936523438 7.033400058746338 L 13.66650009155273 7.033400058746338 L 11.9665002822876 7.033400058746338 L 11.9665002822876 5.333399772644043 L 11.9665002822876 1.666800022125244 C 11.9665002822876 0.5824099779129028 11.08428955078125 -0.2998000085353851 9.999899864196777 -0.2998000085353851 C 8.915510177612305 -0.2998000085353851 8.033299446105957 0.5824099779129028 8.033299446105957 1.666800022125244 L 8.033299446105957 5.333399772644043 L 8.033299446105957 7.033400058746338 L 6.33329963684082 7.033400058746338 L 2.666699886322021 7.033400058746338 C 1.58230984210968 7.033400058746338 0.7000998854637146 7.915609836578369 0.7000998854637146 9 C 0.7000998854637146 10.08438968658447 1.58230984210968 10.96660041809082 2.666699886322021 10.96660041809082 L 6.33329963684082 10.96660041809082 L 8.033299446105957 10.96660041809082 L 8.033299446105957 12.66660022735596 L 8.033299446105957 16.33320045471191 C 8.033299446105957 17.41758918762207 8.915510177612305 18.29980087280273 9.999899864196777 18.29980087280273 M 9.999899864196777 19.99979972839355 C 7.974899768829346 19.99979972839355 6.33329963684082 18.35820007324219 6.33329963684082 16.33320045471191 L 6.33329963684082 12.66660022735596 L 2.666699886322021 12.66660022735596 C 0.6416998505592346 12.66660022735596 -0.9999001622200012 11.02499961853027 -0.9999001622200012 9 C -0.9999001622200012 6.974999904632568 0.6416998505592346 5.333399772644043 2.666699886322021 5.333399772644043 L 6.33329963684082 5.333399772644043 L 6.33329963684082 1.666800022125244 C 6.33329963684082 -0.3582000136375427 7.974899768829346 -1.999799966812134 9.999899864196777 -1.999799966812134 C 12.02489948272705 -1.999799966812134 13.66650009155273 -0.3582000136375427 13.66650009155273 1.666800022125244 L 13.66650009155273 5.333399772644043 L 17.33309936523438 5.333399772644043 C 19.35809898376465 5.333399772644043 20.99970054626465 6.974999904632568 20.99970054626465 9 C 20.99970054626465 11.02499961853027 19.35809898376465 12.66660022735596 17.33309936523438 12.66660022735596 L 13.66650009155273 12.66660022735596 L 13.66650009155273 16.33320045471191 C 13.66650009155273 18.35820007324219 12.02489948272705 19.99979972839355 9.999899864196777 19.99979972839355 Z"
                        stroke="none"
                        fill="#828eb4"
                    />
                </g>
            </svg>
        </NavLink>
    );
};

export default CategoryIcon;