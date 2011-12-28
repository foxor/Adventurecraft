function drawMan() {
    var SPEED_DIV = 20;
    return [createObject({radius: [1,3,1], translationVelocity: [0,0,0], postRotation: [0,90,0], children: [ // TORSO
                createObject({radius: [1,1,1], translation: [0,3.5,0]}), // HEAD
                createTimedObject({radius: [0.5,1.5,0.5], translation: [1,3,0], rotationCenter: [0,1,0], timedUpdate: function(t) {
                    this.postRotation[0] = 180 + Math.sin(t / SPEED_DIV) * 30;
                }, postTimedUpdate: false, children: [
                    createObject({radius: [0.5,1.5,0.5], translation: [0,2,0], rotationCenter: [0,1,0], postRotation:  [-90,0,0]})
                ]}), //LARM
                createTimedObject({radius: [0.5,1.5,0.5], translation: [-1,3,0], rotationCenter: [0,1,0], timedUpdate: function(t) {
                    this.postRotation[0] = 180 + Math.sin(t / SPEED_DIV + Math.PI) * 30;
                }, postTimedUpdate: false, children: [
                    createObject({radius: [0.5,1.5,0.5], translation: [0,2,0], rotationCenter: [0,1,0], postRotation:  [-90,0,0]})
                ]}), //RARM
                createTimedObject({radius: [0.5,1.5,0.5], translation: [1,-1.5,0], rotationCenter: [0,1,0], timedUpdate: function(t) {
                    this.postRotation[0] = 160 + Math.sin(t / SPEED_DIV + Math.PI) * 70;
                }, postTimedUpdate: false, children: [
                    createTimedObject({radius: [0.5,1.5,0.5], translation: [0,2,0], rotationCenter: [0,1,0], timedUpdate: function(t) {
                        this.postRotation[0] = 50 - Math.sin(t / SPEED_DIV + Math.PI) * 40;
                    }, children: [
                        createObject({radius: [0.5,0.5,1], translation: [0,1,-0.5]})
                    ]})
                ]}), //RLEG
                createTimedObject({radius: [0.5,1.5,0.5], translation: [-1,-1.5,0], rotationCenter: [0,1,0], timedUpdate: function(t) {
                    this.postRotation[0] = 160 + Math.sin(t / SPEED_DIV) * 70;
                }, postTimedUpdate: false, children: [
                    createTimedObject({radius: [0.5,1.5,0.5], translation: [0,2,0], rotationCenter: [0,1,0], timedUpdate: function(t) {
                        this.postRotation[0] = 50 - Math.sin(t / SPEED_DIV) * 40;
                    }, children: [
                        createObject({radius: [0.5,0.5,1], translation: [0,1,-0.5]})
                    ]})
                ]}) //LLEG
            ]
        })
    ];
}
