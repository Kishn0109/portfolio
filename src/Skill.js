import React from 'react'
import './Skill.css'

function Skill() {
    return (
        <div>
            <div className="skill_effect_1">
                
            </div>
            <div className="skill_effect_2">

            </div>
            <div className="skill_effect_3">
                
            </div>
            <div className="container skill_container">
                <div className="header skill_heading">
                    <h1>Skill's</h1>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="skill_1 d-flex align-items-center">
                        <div className="logo_head">
                            <div className="logo"></div>
                        </div>
                        <div className="skill_1info">
                            <h3>Frontend developer</h3>
                        </div>
                    </div>
                    <div className="skill_2 d-flex align-items-center">
                    <div className="logo_head">
                            <div className="logo"></div>
                        </div>
                        <div className="skill_2info">
                      <h3>  Backend developer</h3>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 frontend_bar">
                        <div className="frontend_box">
                        <div className="html f_div"> <h5>HTML</h5>
                        <div className="html_score"></div>

                        </div>
                        <div className="css f_div"> <h5>CSS </h5>
                        <div className="html_score css_score"></div>

                        </div>
                        <div className="scss f_div"><h5>SCSS </h5>
                        
                        <div className="html_score scss_score"></div>
                        </div>
                        <div className="javascript f_div"><h5>Javascript  </h5>
                        <div className="html_scor javascript_scoree"></div>

                        </div>
                        <div className="react_js f_div"> <h5>React.js </h5>
                        <div className="html_score react_score"></div>

                        </div>
                        <div className="redux f_div"> <h5>Redux </h5>
                        <div className="html_score redux_score"></div>

                        </div>
                        </div>
                    </div>
                    <div className="col-6 backend_bar">
                        <div className="backend_box">
                        <div className="node_js f_div" > <h5>Node.js  </h5>
                        <div className="html_score node_score"></div>

                        </div>
                        <div className="express_js f_div"><h5>Express </h5>
                        <div className="html_score express_score"></div>

                        </div>
                        <div className="Mongo_db f_div"><h5>Mongodb </h5>
                        <div className="html_score mongo_score"></div>

                        </div>
                        <div className="firebase f_div"><h5>Firebse </h5>
                        <div className="html_score firebase_score"></div>

                        </div>
                        </div>
                    </div>

                </div>
        
            </div>
        </div>
    )
}

export default Skill
