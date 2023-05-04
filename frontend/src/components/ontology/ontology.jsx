import React from 'react';
import "../../css/ontology.css";
import CreateTree from './tree.jsx';
import { SizeMe } from 'react-sizeme';
import {subset, constitution, theorem, subtopic, characterize, derive} from './data';



export default class Ontology extends React.Component { 
    constructor() {
        super();
    }

    render () {  
        
        return (
            <div>
            <div className='background'>
                <div className='intro'>
                    <h1>Relation Descriptions</h1>
                    <br></br>
                    <p>The MSEKE curriculum knowledge map organizes concepts into a hierarchical tree. To incorporate an additional layer of useful information, each hierarchical relation is categorized by the type of relation, which is labelled by different colours in the map. There are six relations found in the concept map, and they are described on this page. 
                    </p>
                </div>


                <div className='content-side'>  
                    <div className='relation-section subset' id='subset'>
                        <h1 style={{color: "#f79d65"}}>Subset</h1>
                        <br></br>
                        <p>subset(X, Y) := Y is a subset of X</p>
                        <br></br>
                        <p>Y is a type of X</p>
                        <p>X is a label that describes Y</p>
                        <br></br>
                        <p>By modelling conceptual ideas into sets, concepts can be hierarchically organized by sets. To illustrate, consider the concept of functions in mathematics. Instead of defining functions as a mathematical object, it is defined as the set of all functions. 
                        <br></br>
                        Other examples are:
                        <ul>
                            <li>The set of all polynomial functions</li>
                            <li>The set of all vector fields</li>
                            <li>The set of all graphing techniques</li>
                            <li>The set of all phase diagrams</li>
                        </ul>
                        Some concepts by nature are sets, or more precisely, a label which holds elements such as:
                        <ul>
                            <li>The Laws of Thermodynamics</li>
                            <li>Crystal Families</li>
                            <li>Periodic Table Groups</li>
                        </ul>
                        With the concepts modeled in this way, the subset relation is defined naturally. The subset relation describes a broader than, narrower than relation where the parent class is a set, and the child class is either an element, or a subset of the set. 
                        </p>
                    </div>
                    <div className='relation-section constitution' id='constitution'>
                        <h1 style={{color: "#ef233c"}}>Constitution</h1>
                        <p>constitution(X, Y) := X constitutes of Y</p>
                        <br></br>
                        <p>Y is made of X</p>
                        <p>Y is a part of X</p>
                        <br></br>
                        <p>When analyzing physical matter, which is especially common in materials science, we are often concerned with what matter is made of. This is captured using the constitution relation. 
                        <br></br>
                        This relation may be considering physical matter for instance:
                        <ul>
                            <li>A house is made of bricks</li>
                            <li>A person is made of cells</li>
                            <li>A wheel is a part of a car</li>
                        </ul>
                        
                        The made-of use case of the relation is limited to physical matter, however the part-of use case could also consider conceptual parthood as well. For instance:
                        <ul>
                            <li>Elements are part of the periodic table</li>
                            <li>Dates are part of a calendar</li>
                            <li>Words are part of a sentence</li>
                            <li>x-axis is part of a graph</li>
                        </ul>
                        </p>
                    </div>
                    <div className='relation-section subtopic' id='subtopic'>
                        <h1 style={{color: "#99d98c"}}>Subtopic</h1>
                        <p>subtopic(X, Y) :=  Y is a subtopic of X</p>
                        <br></br>
                        <p>The format of information grouped into chapters in textbooks, or modules in courses has been a historically widely used organization of information. The relation seen is where a topic branches into various sub topics, which are generally related, but more specific than the overarching topic. The subtopic relation is most often used in the high level with broad topics. For instance the topic of calculus would have subtopics such as functions, limits, integrals, differential equations etc. Since it is not formally axiomatized, this relation carries less information than others, however it is useful for grouping information in meaningful ways.</p>
                    </div>
                    <div className='relation-section characterize' id='characterize'>
                        <h1 style={{color: "#c77dff"}}>Characterize</h1>
                        <p>characterized(X, Y) := Y is an attribute, or family of attributes of X</p>
                        <br></br>
                        <p>The properties of a concept have a key importance in describing that concept. It is especially relevant in material science, as any material has a set of attributes which describe it. 
                        <br></br>
                        The characterized relation describes the attributes of a concept, where the child class is either directly an attribute (a property that is true all the time) or an attribute set, which is a variable that can take on either discrete or continuous values. The discrete attribute sets are a set of discrete options, and the continuous attribute sets can take on infinite values.
                        <br></br>
                        Since there are often many related attributes, which can be bundled into groups, the use of the subset relation may be used within the characterize child class. 
                        <br></br>
                        To make the attribute set relation clear, the child class which is considered the attribute set is coloured differently, with a dashed border. This cue means that the particular concept is an attribute set describing the parent. 
                        <br></br>
                        It could either be the direct part children relationship:
                        <ul>
                            <li>characterize(person, <strong>eye colour</strong>)</li>
                        </ul>
                        or transitively as in:
                        <ul>
                            <li>characterize(univariate-function, characteristics)</li>
                            <li>subset(characteristics, continuous-characteristics)</li>
                            <li>subset(continuous-characteristics, critical-points)</li>
                            <li>subset(critical-points, intercepts)</li>
                            <li>subset(intercepts, <strong>y-intercept</strong>)</li>
                            <li></li>
                        </ul>       
                        The bolded concepts are considered the attribute sets
                        </p>
                    </div>
                    <div className='relation-section theorem' id='theorem'>
                        <h1 style={{color: "#00bbf9"}}>Theorem</h1>
                        <p>Theorem(X, Y) := Y is a theorem, rule, or law that is related to X</p>
                        <br></br>
                        <p>This relation is also modeled after the format of a textbook, where scientific or mathematical theorems are highlighted as important points in the textbook. Since this is a prominent aspect of course content, it deserved its own relation. The relation is not formally axiomatized, similarly to the subtopic relation, the concepts are loosely defined as related. The only restriction is that the child class must be a theorem or some family of theorems (like the laws of thermodynamics).</p>
                    </div>
                    <div className='relation-section derived' id='derived'>
                        <h1 style={{color: "#ff7096"}}>Derived</h1>
                        <p>derive(X, Y) := Y assists in the definition, construction, or discovery of X</p>
                        <br></br>
                        <p>X is found by Y</p>
                        <p>X is produced by Y</p>
                        <p>X originated from Y</p>
                        <br></br>
                        <p>When considering mathematical formulas or rules, it is often useful to consider a first principles derivation of the formula. However, this can extend beyond the mathematical meaning to a more broad scope where a concept is determined with the help of another concept.</p>
                    </div>
                </div>
                
                <div className='example-side'>
                <SizeMe>
                {({ size }) => 
                    <div>
                    <div className='positioner1'>
                        <CreateTree data={subset} width={'500'} height={'400'}/>
                    </div>
                    <div className='positioner2'>
                        <CreateTree data={constitution} width={size.width} height={'400'}/>
                    </div>
                    <div className='positioner3'>
                        <CreateTree data={subtopic} width={size.width} height={'400'}/>
                    </div>
                    <div className='positioner3'>
                        <CreateTree data={characterize} width={size.width} height={'400'}/>
                    </div>
                    <div className='positioner3'>
                        <CreateTree data={theorem} width={size.width} height={'300'}/>
                    </div>
                    <div className='positioner3'>
                        <CreateTree data={derive} width={size.width} height={'400'}/>
                    </div>
                    </div>
                }
                </SizeMe>
                </div>
            </div>
            </div>
        );
    }
}

/*
<div className='intro'>
                <h1>Relation Descriptions</h1>
                <br></br>
                <p>The MSEKE curriculum knowledge map organizes concepts into a hierarchical tree. To incorporate an additional layer of useful information, each hierarchical relation is categorized by the type of relation, which is labelled by different colours in the map. There are six relations found in the concept map, and they are described on this page. 
                </p>
            </div>
 */