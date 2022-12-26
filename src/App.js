import React, {useState} from 'react';
import './App.css';
import CocoDetection from './CocoDetection';
import CustomDetection from './CustomDetection';

function App() {
	const [camera, showCamera] = useState(false)
	const [detectType, setDetectType] = useState('coco')
	const [loadTitle, setLoadTitle] = useState('Realtime Object Detection ReactJS')

	const handleChangeDetection = () => {
		if(detectType === 'coco') setDetectType('custom')
		else setDetectType('coco')
	}

	const handleOnLoad = (text) => {
		setLoadTitle(text)
	}

	const handleFinishLoad = (text) => {
		setLoadTitle(text)
	}

	const handleStopDetection = () => {
		showCamera(!camera)
		setLoadTitle('Realtime Object Detection ReactJS')
	}

	return (
		<div className="App">
			<div style={{position: 'absolute', top: 10, width: '100%', display: 'flex', justifyContent: 'center'}}>
				<p>{loadTitle}</p>
			</div>
			{ camera?
				
				<CocoDetection onLoad={handleOnLoad} onFinishLoad={handleFinishLoad} />
					
				:
				<div style={{position: 'absolute', marginLeft: "auto", marginRight: "auto", textAlign: "center", left: 0, right: 0, zindex: 9, width: 640, height: 480, backgroundColor: '#446'}}>

				</div>
			}
			<div style={{position: 'absolute', bottom: 10, width: '100%', display: 'flex', justifyContent: 'center'}}>
				
				<p style={{padding: '10px 25px', backgroundColor: '#7700cf', borderRadius: 10, cursor: 'pointer', marginLeft: 10}} onClick={handleStopDetection}>
					{camera? 'Stop Detection' : 'Start Detection'}
				</p>
			</div>
		</div>
	);
}

export default App;
