// const { hash } = require("bcryptjs");

// import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function(engine, canvas) {
    engine.runRenderLoop(function() {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
};

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function() {
    return new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        disableWebGL2Support: false,
    });
};
var createScene = function() {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.FromHexString("#de7e35");

    var camera = new BABYLON.FreeCamera(
        "camera1",
        new BABYLON.Vector3(6, 0, 0),
        scene
    );
    camera.fov = 1;
    // var camera = new BABYLON.ArcRotateCamera(
    //   "camera",
    //   BABYLON.Tools.ToRadians(90),
    //   BABYLON.Tools.ToRadians(65),
    //   10,
    //   BABYLON.Vector3.Zero(),
    //   scene
    // );

    // This targets the camera to scene origin
    camera.setTarget(new BABYLON.Vector3(0, 0, 0));

    // This attaches the camera to the canvas
    // camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light1 = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(0, 1, 0),
        scene
    );

    // Default intensity is 1. Let's dim the light a small amount
    light1.intensity = 1;

    var light = new BABYLON.DirectionalLight(
        "light",
        new BABYLON.Vector3(-1, -1, -1),
        scene
    );
    light.position = new BABYLON.Vector3(1, 3, 1);
    //var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 0, 0), scene);
    //var light = new BABYLON.SpotLight("light", new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(-1, -1, -1), Math.PI/4, 50, scene);

    light.intensity = 2;

    // var light = new BABYLON.PointLight(
    //   "light",
    //   new BABYLON.Vector3(0, 5, 2),
    //   scene
    // );

    // light.intensity = 10;

    // var box55 = BABYLON.MeshBuilder.CreateBox(
    //   "box",
    //   {
    //     size: 1,
    //   },
    //   scene
    // );
    // box55.position = new BABYLON.Vector3(5, 5, 0);
    //////////////////////////////////////////////

    //   const firebaseConfig = {
    //     apiKey: "AIzaSyABYkWUqRz3e-HOqMaJVgtjiycWu2LeDvo",
    //     authDomain: "algebraic-pier-424810-h7.firebaseapp.com",
    //     projectId: "algebraic-pier-424810-h7",
    //     storageBucket: "algebraic-pier-424810-h7.appspot.com",
    //     messagingSenderId: "539878297267",
    //     appId: "1:539878297267:web:2d7a76c6c97caf656aaac6",
    //     measurementId: "G-BJP01HEDVL",
    //   };

    //   //   const app = firebase.initializeApp(firebaseConfig);

    //   // Initialize Firebase
    //   firebase.initializeApp(firebaseConfig);

    //   // Use Firebase services as needed
    //   const database = firebase.database(); // For Realtime Database
    //   const firestore = firebase.firestore(); // For Firestore

    //   // Reference to your database location
    //   const dbRef = database.ref("path/to/your/data");

    //   // Write data
    //   dbRef.set({
    //     username: "exampleUser",
    //     email: "user@example.com",
    //   });

    //   // Read data
    //   dbRef.on("value", (snapshot) => {
    //     const data = snapshot.val();
    //     console.log(data);
    //   });

    //   // Reference to your Firestore collection
    //   const db = firestore.collection("yourCollection");

    //   // Add a document
    //   db.add({
    //     username: "exampleUser",
    //     email: "user@example.com",
    //   })
    //     .then((docRef) => {
    //       console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch((error) => {
    //       console.error("Error adding document: ", error);
    //     });

    //   // Get documents
    //   db.get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log(`${doc.id} => ${doc.data()}`);
    //     });
    //   });

    // Create a single supabase client for interacting with your database
    const { createClient } = supabase;
    // const supabase = createClient(
    //   "https://ynlhevjelzfbscguujsi.supabase.co",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlubGhldmplbHpmYnNjZ3V1anNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MDMwMTcsImV4cCI6MjAzMjk3OTAxN30.sybHe-0rVlrPbkK-d6-Go4KjAF32M57iw1caNQN-1NY"
    // );
    console.log("Supabase Instance: ", supabase);

    const _supabase = createClient(
        "https://ynlhevjelzfbscguujsi.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlubGhldmplbHpmYnNjZ3V1anNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MDMwMTcsImV4cCI6MjAzMjk3OTAxN30.sybHe-0rVlrPbkK-d6-Go4KjAF32M57iw1caNQN-1NY"
    );

    const _supabaseA = createClient(
        "https://zhtbsboryikeigoaeztq.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpodGJzYm9yeWlrZWlnb2FlenRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMDA3MDQsImV4cCI6MjAzMzU3NjcwNH0.0cDIpFEnQLC8KzCsxMd25sXF4ofs6lU7vz8LlpO44yw"
    );

    console.log("Supabase Instance: ", _supabase);

    async function makeAccount(email, password) {
        let { data, error } = await _supabase.auth.signUp({
            email: email,
            password: password,
            context: "neka sranja",
        });
        console.log(data);
    }

    async function logOutAccount() {
        let { error } = await _supabase.auth.signOut();
    }

    let loged = false;

    async function logInAccount(email, password) {
        let { data, error } = await _supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        console.log(data);
        if (data.user != null) {
            loged = true;
        } else {
            loged = false;
        }
    }

    async function resetPassword(email, newPassword) {
        const { data, error } = await _supabase.auth.updateUser({
            email: email,
            password: newPassword,
            data: { hello: "world" },
        });
        console.log(data);
    }
    // logInAccount();

    // makeAccount();

    async function getData() {
        let { data: ScoreBoard, error } = await _supabase
            .from("ScoreBoard")
            .select("*");

        console.log(ScoreBoard);
        let array = ScoreBoard;
        array.sort((a, b) => (a.score > b.score ? -1 : b.score > a.score ? 1 : 0));

        document.getElementById("score").innerHTML = "";
        for (let i = 0; i < array.length; i++) {
            let link = "";

            if (array[i].country != "*") {
                link =
                    '<img src = "1x1/' + array[i].country.toLowerCase() + '.svg"alt="My Happy SVG"/>';
            }
            // document.getElementById("countryProfile").innerHTML = "";

            if (name == array[i].name) {
                document.getElementById("nameProfile").innerHTML = name;

                document.getElementById("countryProfile").innerHTML = link;
                document.getElementById("scoreProfile").innerHTML =
                    "Best Score : " + array[i].score;
            }

            document.getElementById(
                "score"
            ).innerHTML += `<div class='row'><div class='rowPlacment'>${
        i + 1
      }</div> <div class='rowName'>${
        array[i].name
      }</div><div class='rowCountry'> ${link} </div><div class='rowScore'>${
        array[i].score
      }</div></div>`;
        }
    }
    let accountsArray = [];
    async function registerData(name, email, country) {
        console.log(password);
        const { data, error } = await _supabase
            .from("Accounts")
            .insert([{ name, email, country }])
            .select();
        if (data) {
            console.log(data);
        }
        accountsArray = data;
    }
    let loginArray = [];

    async function logInData() {
        let { data: Accounts, error } = await _supabase
            .from("Accounts")
            .select("*");
        let array = Accounts;
        loginArray = Accounts;
    }

    logInData();

    async function addData(name, score, country) {
        const { data, error } = await _supabase
            .from("ScoreBoard")
            .insert([{ name, score, country }])
            .select();
        if (data) {
            console.log(data);
        }
    }
    async function deleteData(i) {
        const { error } = await _supabase.from("ScoreBoard").delete().eq("id", i);
    }

    async function checkAndAddData(name, score) {
        let { data: ScoreBoard, error } = await _supabase
            .from("ScoreBoard")
            .select("*");

        console.log("dolso je ovde");
        let array = ScoreBoard;
        let br = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].name == name) {
                br++;
                if (score > array[i].score) {
                    deleteData(array[i].id);
                    console.log(array[i].country);
                    addData(name, score, array[i].country);
                }
            }
        }
        if (br == 0) {
            if (countries == null) {
                for (let i = 0; i < loginArray.length; i++) {
                    if (loginArray[i].name == name) {
                        console.log(loginArray[i].country);
                        addData(name, score, loginArray[i].country);
                    }
                }
            } else {
                addData(name, score, countries);
            }
        }
    }

    getData();

    ///////////////////////////////////////////////

    const hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
        "003.env",
        scene
    );
    hdrTexture.rotationY = -0.2;

    scene.environmentIntensity = 0.75;

    scene.environmentTexture = hdrTexture;

    let basketball;
    let hoop;
    let board;
    let ground;
    let net;
    let barrier;

    let trown = false;

    let trownOne = 0;

    let score = 0;
    let animation;

    let timerStart = false;
    let timer = 30;
    let name;
    let scoreArray = [];
    let combo = 0;
    let countries;
    /////////////////////////////////////////////

    var bcrypt = dcodeIO.bcrypt;
    // const bcrypt = require("bcrypt");

    // Use bcrypt here
    const saltRounds = 10;
    // const password = "myPlaintextPassword";

    // Generate a salt and hash the password
    // bcrypt.genSalt(saltRounds, function (err, salt) {
    //   if (err) {
    //     console.error("Error generating salt:", err);
    //   } else {
    //     bcrypt.hash(password, salt, function (err, hash) {
    //       if (err) {
    //         console.error("Error hashing password:", err);
    //       } else {
    //         // Store the hash in your database
    //         console.log("Hashed password:", hash);
    //       }
    //     });
    //   }
    // });

    // // Verify a password
    // const hashedPassword =
    //   "$2a$10$ZXDeQhwvqYJmUORVp5qqE.04BgpO2C0y3ZnPGtnj5pjjNYH.l22c2"; // Replace with the actual hash from your database
    // bcrypt.compare(password, hashedPassword, function (err, result) {
    //   if (err) {
    //     console.error("Error comparing passwords:", err);
    //   } else if (result) {
    //     console.log("Password matches");
    //   } else {
    //     console.log("Password does not match");
    //   }
    // });

    // Check if bcrypt is defined

    ////////////////////////////////////////////

    // document.getElementById("nameBtn").addEventListener("click", function() {
    //     name = document.getElementById("nameC").value;

    //     document.getElementById("nameBoxO").style.display = "none";
    // });

    document.getElementById("singUpBtn").addEventListener("click", function() {
        let elements = document.getElementsByClassName("forRegister");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "flex";
        }
        document.getElementById("singUpBtn").style.display = "none";
    });

    document
        .getElementById("logInBtn")
        .addEventListener("click", async function() {
            if (document.getElementById("registerBtn").style.display == "flex") {
                let elements = document.getElementsByClassName("forRegister");
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.display = "none";
                }
                document.getElementById("usernameC").style.border = "none";

                document.getElementById("passwordC").style.border = "none";
                document.getElementById("singUpBtn").style.display = "flex";
            } else {
                let name1 = document.getElementById("usernameC").value;
                let password = document.getElementById("passwordC").value;
                document.getElementById("usernameC").style.border = "none";

                document.getElementById("passwordC").style.border = "none";

                let reU = /([A-z])*([0-9])*([@.#$!%*?&^])*/;
                let reP = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

                console.log("doslo");
                await logInData();
                console.log("doslo");

                let foundN = false;
                let foundP = false;

                for (let i = 0; i < loginArray.length; i++) {
                    if (loginArray[i].name == name1) {
                        foundN = true;

                        await logInAccount(loginArray[i].email, password);

                        if (loged) {
                            foundP = true;
                            document.getElementById("nameBoxO").style.display = "none";
                            name = name1;
                            console.log(name);
                            getData();
                        }

                        // bcrypt.compare(
                        //   password,
                        //   loginArray[i].password,
                        //   function (err, result) {
                        //     if (err) {
                        //       console.error("Error comparing passwords:", err);
                        //     } else if (result) {
                        //       foundP = true;
                        //       document.getElementById("nameBoxO").style.display = "none";
                        //       name = name1;
                        //       console.log(name);
                        //       getData();
                        //     } else {
                        //       console.log("Password does not match");
                        //     }
                        //   }
                        // );

                        // if (loginArray[i].password == password) {
                        //   foundP = true;
                        //   document.getElementById("nameBoxO").style.display = "none";
                        //   name = name1;
                        //   console.log(name);
                        //   getData();
                        // }
                    }
                }
                if (!foundN) {
                    document.getElementById("usernameC").style.border = "solid red 5px";
                }
                if (!foundP) {
                    document.getElementById("passwordC").style.border = "solid red 5px";
                }
            }
        });

    document.getElementById("logOutBtn").addEventListener("click", function() {
        document.getElementById("profileBoxO").style.display = "none";
        logOutAccount();

        document.getElementById("nameBoxO").style.display = "flex";
        document.getElementById("usernameC").value = "";
        document.getElementById("passwordC").value = "";
    });

    document.getElementById("chngPassBtn").addEventListener("click", function() {
        // resetPassword();
        document.getElementById("changePasswordBoxO").style.display = "flex";

        document.getElementById("passwordChange").value = "";
    });

    document
        .getElementById("passwordChangeBoxBtn")
        .addEventListener("click", function() {
            let passwordChanged = document.getElementById("passwordChange").value;

            let reP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;

            if (reP.test(passwordChanged)) {
                document.getElementById("passwordChange").style.border = "solid red 5px";
            }

            if (reP.test(passwordChanged)) {
                for (let i = 0; i < loginArray.length; i++) {
                    if (loginArray[i].name == name) {
                        resetPassword(loginArray[i].email, passwordChanged);

                        document.getElementById("profileBoxO").style.display = "none";

                        logOutAccount();

                        document.getElementById("nameBoxO").style.display = "flex";
                        document.getElementById("usernameC").value = "";
                        document.getElementById("passwordC").value = "";
                        document.getElementById("passwordChange").value = "";

                        document.getElementById("changePasswordBoxO").style.display =
                            "none";
                    }
                }
            }
        });

    document.getElementById("closeChange").addEventListener("click", function() {
        document.getElementById("changePasswordBoxO").style.display = "none";
    });

    document.getElementById("name").addEventListener("click", function() {
        document.getElementById("profileBoxO").style.display = "flex";
    });

    document.getElementById("goToYouBtn").addEventListener("click", function() {
        let names = document.getElementsByClassName("rowName");
        for (let i = 0; i < names.length; i++) {
            if (names[i].textContent == name) {
                names[i].scrollIntoView();
            }
        }
    });

    document.getElementById("scoreBoard").addEventListener("click", function() {
        document.getElementById("scoreBoxO").style.display = "flex";
    });
    document
        .getElementById("closeProfile")
        .addEventListener("click", function() {
            document.getElementById("profileBoxO").style.display = "none";
        });

    document.getElementById("closeScore").addEventListener("click", function() {
        document.getElementById("scoreBoxO").style.display = "none";
    });

    document.getElementById("registerBtn").addEventListener("click", function() {
        let name = document.getElementById("usernameC").value;
        let password = document.getElementById("passwordC").value;

        let email = document.getElementById("emailC").value;

        logInData();

        let reE = /\S+@\S+\.\S+/;

        let reU = /([A-z])*([0-9])*([@.#$!%*?&^])*/;

        let reP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;

        let noMatches = true;
        document.getElementById("usernameC").style.border = "none";
        document.getElementById("emailC").style.border = "none";
        document.getElementById("passwordC").style.border = "none";
        document.getElementById("countriesC").style.border = "none";

        for (let i = 0; i < loginArray.length; i++) {
            if (loginArray[i].name == name) {
                noMatches = false;

                document.getElementById("usernameC").style.border = "solid red 5px";
            }
        }
        for (let i = 0; i < loginArray.length; i++) {
            if (loginArray[i].email == email) {
                noMatches = false;

                document.getElementById("emailC").style.border = "solid red 5px";
            }
        }

        if (reE.test(email)) {
            document.getElementById("emailC").style.border = "solid red 5px";
        }
        if (reU.test(name)) {
            document.getElementById("usernameC").style.border = "solid red 5px";
        }
        if (reP.test(password)) {
            document.getElementById("passwordC").style.border = "solid red 5px";
        }

        let country = document.getElementById("countriesC").value;

        if (country == "*") {
            document.getElementById("countriesC").style.border = "solid red 5px";
        }
        countries = document.getElementById("countriesC").value;
        if (
            reE.test(email) &&
            reU.test(name) &&
            reP.test(password) &&
            noMatches &&
            country != "*"
        ) {
            let passwordHash;

            bcrypt.genSalt(saltRounds, function(err, salt) {
                if (err) {
                    console.error("Error generating salt:", err);
                } else {
                    bcrypt.hash(password, salt, function(err, hash) {
                        if (err) {
                            console.error("Error hashing password:", err);
                        } else {
                            // Store the hash in your database
                            console.log("Hashed password:", hash);
                            passwordHash = hash;
                        }
                    });
                }
            });
            console.log(passwordHash);
            setTimeout(() => {
                makeAccount(email, password);
                registerData(name, email, country);
                let elements = document.getElementsByClassName("forRegister");
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.display = "none";
                }
                document.getElementById("usernameC").style.border = "none";

                document.getElementById("passwordC").style.border = "none";
                document.getElementById("singUpBtn").style.display = "flex";
            }, 2000);
        }
    });

    BABYLON.SceneLoader.ImportMesh(
        "",
        "",
        "basketball.glb",
        scene,
        (meshes, particleSystem, skeleton, animationGroups) => {
            meshes[0].scaling = new BABYLON.Vector3(-1, 1, 1);

            // meshes[4].visibility = 0;
            basketball = meshes[1];
            // console.log(scene.getMeshByName("ball"));
            hoop = meshes[15];
            // hoop.scaling = new BABYLON.Vector3(0.02, 0.02, 0.02);
            board = meshes[17];
            net = meshes[16];
            // meshes[17].visibility = 0;
            // meshes[16].visibility = 0;
            // table.visibility = 0;
            animationGroups[0].stop();
            animation = animationGroups[0];

            ground = meshes[14];
            barrier = meshes[18];
            board.visibility = 0;
            barrier.visibility = 0;

            // // meshes[2].scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);

            basketball.position.z = 0;
            basketball.position.y = 100;
            basketball.position.x = 2.4;

            //Create dynamic texture

            // restore context to save point
            // context.restore();

            // update changes to dynamic texture
            // textureGround.update();

            shadowGenerator.addShadowCaster(meshes[1]);

            // shadowGenerator.useVarianceShadowMap = true;

            // shadowGenerator.usePoissonSampling = true;

            meshes[1].receiveShadows = true;

            ground.receiveShadows = true;

            shadowGenerator.addShadowCaster(hoop);
            hoop.receiveShadows = true;

            shadowGenerator.addShadowCaster(board);
            board.receiveShadows = true;

            shadowGenerator.addShadowCaster(meshes[16], true);
            meshes[16].receiveShadows = true;

            shadowGenerator.addShadowCaster(meshes[2], true);
            meshes[2].receiveShadows = true;
            shadowGenerator.addShadowCaster(meshes[3], true);
            meshes[3].receiveShadows = true;
            shadowGenerator.addShadowCaster(meshes[4], true);
            meshes[4].receiveShadows = true;
            shadowGenerator.addShadowCaster(meshes[5], true);
            meshes[5].receiveShadows = true;
            shadowGenerator.addShadowCaster(meshes[6], true);
            meshes[6].receiveShadows = true;
            shadowGenerator.addShadowCaster(meshes[7], true);
            meshes[7].receiveShadows = true;
            shadowGenerator.addShadowCaster(meshes[8], true);
            meshes[8].receiveShadows = true;
        }
    );

    var textureResolution = 1024;
    var textureGround = new BABYLON.DynamicTexture(
        "dynamic texture", {
            width: 512,
            height: 512,
        },
        scene
    );
    var context = textureGround.getContext();
    const plane = BABYLON.MeshBuilder.CreatePlane(
        "plane", {
            size: 1,
        },
        scene
    );
    plane.position.y = 2.35;
    plane.position.x = -1.4;
    plane.position.z = 0.02;
    plane.rotation.y = -Math.PI / 2;

    var materialGround = new BABYLON.StandardMaterial("Mat", scene);
    materialGround.diffuseTexture = textureGround;
    plane.material = materialGround;

    // context.clearRect(0, 0, 512, 512);

    // save context in current state
    // context.save();

    // context.restore();

    //Add text to dynamic texture

    function drawScore() {
        let text1 = "00:0" + timer;
        if (timer < 10) {
            text1 = "00:0" + timer;
        } else {
            text1 = "00:" + timer;
        }

        let text2 = score;
        var font = "bold 125px digital-7";
        textureGround.drawText(text1, null, 200, font, "red", "black", true, false);

        // context.save();
        // context.restore();
        textureGround.update();

        // update changes to dynamic texture

        var font1 = "bold 200px digital-7";

        textureGround.drawText(text2, null, 400, font1, "red", "", true, true);
    }

    let mat = new BABYLON.StandardMaterial("mat");
    mat.diffuseVolor = new BABYLON.Color3(1, 0, 0);

    let mat1 = new BABYLON.StandardMaterial("mat1");
    mat1.diffuseVolor = new BABYLON.Color3.FromHexString(`#050505`);

    var yellowMat = new BABYLON.StandardMaterial("yMat", scene);
    yellowMat.diffuseColor = new BABYLON.Color3.FromHexString("#f2c705");

    var greyMat = new BABYLON.StandardMaterial("gMat", scene);
    greyMat.diffuseColor = new BABYLON.Color3.FromHexString("#4f4f4e");

    var redMat = new BABYLON.StandardMaterial("rMat", scene);
    redMat.diffuseColor = new BABYLON.Color3.FromHexString("#db4504");

    var greenMat = new BABYLON.StandardMaterial("greenMat", scene);
    greenMat.diffuseColor = new BABYLON.Color3.FromHexString("#198c38");

    let hitboxGoalCheckEnter = BABYLON.MeshBuilder.CreateBox(
        "box", {
            size: 0.4,
            height: 0.2,
        },
        scene
    );
    hitboxGoalCheckEnter.material = yellowMat;
    hitboxGoalCheckEnter.position.y = 0.1;
    let hitboxGoalCheckExit = BABYLON.MeshBuilder.CreateBox(
        "box", {
            size: 0.4,
            height: 0.2,
        },
        scene
    );
    hitboxGoalCheckExit.material = redMat;
    hitboxGoalCheckExit.position.y = -0.2;
    hitboxGoalCheckEnter.visibility = 0;
    hitboxGoalCheckExit.visibility = 0;

    // var ground1 = BABYLON.MeshBuilder.CreateGround(
    //   "ground",
    //   {
    //     width: 26,
    //     height: 26,
    //   },
    //   scene
    // );

    var groundBox = BABYLON.MeshBuilder.CreateBox(
        "groundBox", {
            size: 2.8,
            height: 0.5,
            width: 4,
        },
        scene
    );
    groundBox.position.y = -1.4;
    groundBox.position.x = 1;
    groundBox.rotation.z = -Math.PI / 20.2;
    groundBox.visibility = 0;

    let ballCounter = 1;
    let currentBallArray = [];

    // scene.enablePhysics(null, new BABYLON.AmmoJSPlugin());

    var HK = new BABYLON.HavokPlugin();
    // enable physics in the scene with a gravity
    scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), HK);

    let sphereAggregate;

    var stand = BABYLON.MeshBuilder.CreateBox(
        "stand", {
            size: 1,
        },
        scene
    );
    stand.position = new BABYLON.Vector3(2.4, -2, 0);
    stand.visibility = 0;

    // scene.useRightHandedSystem = true;

    function getBall(i) {
        let ball = basketball.clone("ball-" + i);
        ball.position = new BABYLON.Vector3(2.4, -1.3, 0);
        var sphereS = BABYLON.MeshBuilder.CreateSphere(
            "sphere-" + i, {
                diameter: 0.01,
            },
            scene
        );
        sphereS.parent = ball;

        var sphereB = BABYLON.MeshBuilder.CreateSphere(
            "sphere1-" + i, {
                diameter: 0.48,
            },
            scene
        );
        sphereB.parent = ball;

        sphereAggregate = new BABYLON.PhysicsAggregate(
            ball,
            BABYLON.PhysicsShapeType.SPHERE, {
                mass: 1,
                restitution: 0.84,
            },
            scene
        );

        shadowGenerator.getShadowMap().renderList.push(ball);
        shadowGenerator.addShadowCaster(ball);
        ball.receiveShadows = true;

        // board.material = mat;

        sphereB.visibility = 0;

        // console.log(currentBallArray);

        ballCounter++;

        // console.log(ballCounter - 1);
        getHolder();
    }

    function getHolder() {
        let ballHolder1 = BABYLON.MeshBuilder.CreateBox(
            "ballHolder1", {
                size: 1,
                width: 0.2,
            },
            scene
        );
        ballHolder1.position = new BABYLON.Vector3(2, -1, 0);

        let ballHolder2 = BABYLON.MeshBuilder.CreateBox(
            "ballHolder2", {
                size: 1,
                width: 2.8,
                height: 3,
            },
            scene
        );
        ballHolder2.position = new BABYLON.Vector3(3.34, 1, 0);

        let ballHolder3 = BABYLON.MeshBuilder.CreateBox(
            "ballHolder3", {
                size: 1,
                width: 1,
                height: 1,
            },
            scene
        );
        ballHolder3.position = new BABYLON.Vector3(2.5, -1, 0.95);

        let ballHolder4 = BABYLON.MeshBuilder.CreateBox(
            "ballHolder4", {
                size: 1,
                width: 1,
                height: 1,
            },
            scene
        );
        ballHolder4.position = new BABYLON.Vector3(2.5, -1, -0.95);

        let ballHolder5 = BABYLON.MeshBuilder.CreateBox(
            "ballHolder5", {
                size: 1,
                width: 1,
                height: 1,
            },
            scene
        );
        ballHolder5.position = new BABYLON.Vector3(3.5, -1, 0);

        ballHolder1.visibility = 0;
        ballHolder2.visibility = 0;
        ballHolder3.visibility = 0;
        ballHolder4.visibility = 0;
        ballHolder5.visibility = 0;

        var ballHolder1Aggregate = new BABYLON.PhysicsAggregate(
            ballHolder1,
            BABYLON.PhysicsShapeType.BOX, {
                mass: 0,
            },
            scene
        );

        var ballHolder2Aggregate = new BABYLON.PhysicsAggregate(
            ballHolder2,
            BABYLON.PhysicsShapeType.BOX, {
                mass: 0,
            },
            scene
        );
        var ballHolder3Aggregate = new BABYLON.PhysicsAggregate(
            ballHolder3,
            BABYLON.PhysicsShapeType.BOX, {
                mass: 0,
            },
            scene
        );
        var ballHolder4Aggregate = new BABYLON.PhysicsAggregate(
            ballHolder4,
            BABYLON.PhysicsShapeType.BOX, {
                mass: 0,
            },
            scene
        );
        var ballHolder5Aggregate = new BABYLON.PhysicsAggregate(
            ballHolder5,
            BABYLON.PhysicsShapeType.BOX, {
                mass: 0,
            },
            scene
        );
    }

    //   var ground1 = BABYLON.MeshBuilder.CreateGround(
    //   "ground1",
    //   {
    //     width: 26,
    //     height: 26,
    //   },
    //   scene
    // );

    // ground1.position.y = -2;
    const shadowGenerator = new BABYLON.ShadowGenerator(5024, light);
    // shadowGenerator.useBlurExponentialShadowMap = true;
    // shadowGenerator.useKernelBlur = true;
    // shadowGenerator.blurKernel = 64;
    // shadowGenerator.forceBackFacesOnly = true;
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.transperencyShadow = true;
    // shadowGenerator.getShadowMap().refreshRate =
    //   BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;

    setTimeout(() => {
        getBall(ballCounter);

        var font = "bold 125px digital-7";
        textureGround.drawText(
            "00:30",
            null,
            200,
            font,
            "red",
            "black",
            true,
            false
        );

        // context.save();
        // context.restore();
        textureGround.update();

        // update changes to dynamic texture

        var font1 = "bold 200px digital-7";

        textureGround.drawText("0", null, 400, font1, "red", "", true, true);

        //   ground1.receiveShadows = true;

        var box = BABYLON.MeshBuilder.CreateBox(
            "box", {
                size: 5,
            },
            scene
        );
        box.position.x = 5.5;
        box.visibility = 0;

        var baruierAggregate = new BABYLON.PhysicsAggregate(
            box,
            BABYLON.PhysicsShapeType.BOX, {
                mass: 0,
            },
            scene
        );

        var box1 = BABYLON.MeshBuilder.CreateBox(
            "box", {
                size: 5,
            },
            scene
        );
        box1.position.y = 3;
        box1.position.x = -3;
        box1.visibility = 0;
        var standAggregate1 = new BABYLON.PhysicsAggregate(
            stand,
            BABYLON.PhysicsShapeType.BOX, {
                mass: 0,
            },
            scene
        );

        var baruierAggregate1 = new BABYLON.PhysicsAggregate(
            box1,
            BABYLON.PhysicsShapeType.BOX, {
                mass: 0,
            },
            scene
        );

        var box2 = BABYLON.MeshBuilder.CreateBox(
            "box", {
                size: 5,
            },
            scene
        );
        box2.position.y = 3;
        box2.position.z = -4;
        box2.visibility = 0;

        var baruierAggregate1 = new BABYLON.PhysicsAggregate(
            box2,
            BABYLON.PhysicsShapeType.BOX, {
                mass: 0,
            },
            scene
        );

        var box3 = BABYLON.MeshBuilder.CreateBox(
            "box", {
                size: 5,
            },
            scene
        );
        box3.position.y = 3;
        box3.position.z = 4;
        box3.visibility = 0;

        var baruierAggregate1 = new BABYLON.PhysicsAggregate(
            box3,
            BABYLON.PhysicsShapeType.BOX, {
                mass: 0,
            },
            scene
        );
        var groundAggregate = new BABYLON.PhysicsAggregate(
            ground,
            BABYLON.PhysicsShapeType.MESH, {
                mass: 0,
            },
            scene
        );
        var barrierAggregate = new BABYLON.PhysicsAggregate(
            barrier,
            BABYLON.PhysicsShapeType.MESH, {
                mass: 0,
            },
            scene
        );
        var boardAggregate = new BABYLON.PhysicsAggregate(
            board,
            BABYLON.PhysicsShapeType.MESH, {
                mass: 0,
            },
            scene
        );
        var hoopAghregate = new BABYLON.PhysicsAggregate(
            hoop,
            BABYLON.PhysicsShapeType.MESH, {
                mass: 0,
            },
            scene
        );

        // scene.onPointerDown = function () {
        //   sphereAggregate.body.applyImpulse(
        //     new BABYLON.Vector3(-3, 5, 0),
        //     basketball.absolutePosition
        //   );
        // };

        let down;
        let bottom;
        scene.onPointerDown = function() {
            down = scene.pointerX;
            bottom = scene.pointerY;

            // ballHolder1.dispose();
            // ballHolder2.dispose();

            // console.log(scene.pointerY);
        };
        let up;
        let top;
        scene.onPointerUp = function() {
            up = scene.pointerX;
            top = scene.pointerY;

            if (!paused) {
                if (!trown) {
                    scene.getMeshByName("ballHolder1").dispose();
                    scene.getMeshByName("ballHolder2").dispose();
                    scene.getMeshByName("ballHolder3").dispose();
                    scene.getMeshByName("ballHolder4").dispose();
                    scene.getMeshByName("ballHolder5").dispose();
                    while (scene.getMeshByName("ballHolder1")) {
                        scene.getMeshByName("ballHolder1").dispose();
                        scene.getMeshByName("ballHolder2").dispose();
                        scene.getMeshByName("ballHolder3").dispose();
                        scene.getMeshByName("ballHolder4").dispose();
                        scene.getMeshByName("ballHolder5").dispose();
                    }
                }
            }

            // if (onGround) {
            // console.log(top - bottom);
            if (!paused) {
                if (!trown) {
                    if (!timerStart) {
                        timerStart = true;
                        score = 0;
                        combo = 0;
                        timer = 30;
                        drawScore();
                    }

                    currentBallArray.push({
                        name: ballCounter - 1,
                        timer: 250,
                    });
                    sphereAggregate.body.applyImpulse(
                        new BABYLON.Vector3(-1.75 + (top - bottom) / 400,
                            5.58 - (top - bottom) / 400,
                            (up - down) / 100
                        ),
                        scene.getMeshByName("ball-" + (ballCounter - 1)).absolutePosition
                    );
                    trownOne = ballCounter - 1;
                    setTimeout(() => {
                        getBall(ballCounter);

                        trown = false;
                    }, 1500);
                    trown = true;
                }
            }

            // setTimeout(() => {
            //   scene.getMeshByName("ball-" + (ballCounter - 1)).dispose();
            // }, 2000);

            // }

            // new BABYLON.Vector3(-2.6, 5.98, (up - down) / 100),
            // console.log(scene.pointerY);
        };
    }, 7000);

    let t = 0;
    let last = 0;
    let curent = 0;
    let timerCounter = 0;

    let paused = false;

    document.getElementById("pause").addEventListener("click", function() {
        paused = !paused;
        if (paused) {
            timerStart = false;
        } else {
            timerStart = true;
        }
    });

    ///8936d5ad-a130-421e-91f8-10fedc21c8f4 security token
    // Email.send({
    //   Host: "smtp.elasticemail.com",
    //   Username: "razal313lazar@gmail.com",
    //   Password: "418A2427063A7A3CD390EDC64662604C314A",
    //   To: "razal3132lazar@gmail.com",
    //   From: "razal313lazar@gmail.com",
    //   Subject: "Posalji se kurvo",
    //   Body: "Posalji se picka ti materina",
    // }).then((message) => alert(message));

    document.getElementById("restart").addEventListener("click", function() {
        timerStart = false;
        timer = 30;
        score = 0;

        drawScore();
        paused = false;
    });
    let bTup = false;
    let tup = false;
    let hTup = false;

    scene.onBeforeRenderObservable.add(() => {
        t++;
        if (t > 100) {
            if (timerStart) {
                timerCounter++;
                if (timerCounter % 60 == 0) {
                    timer -= 1;

                    drawScore();
                    if (timer == 0) {
                        checkAndAddData(name, score);
                        setTimeout(() => {
                            getData();
                        }, 2000);
                        getData();
                        timerStart = false;
                        timerCounter = 0;
                        scoreArray = [];
                        drawScore();
                    }
                }
            }
            // if (sphere1.intersectsMesh(groundBox, true)) {
            //   onGround = true;
            // } else {
            //   onGround = false;
            // }
            // console.log(ballCounter - 1);
            // console.log(scene.getMeshByName("sphere-" + (ballCounter - 1)));
            if (currentBallArray.length > 0) {
                for (let i = 0; i < currentBallArray.length; i++) {
                    currentBallArray[i].timer -= 1;
                    if (currentBallArray[i].timer == 0) {
                        scene.getMeshByName("ball-" + currentBallArray[i].name).dispose();
                        currentBallArray.splice(i, 1);
                        i += 1;
                    }
                }
            }

            if (
                scene.getMeshByName("sphere1-" + trownOne) &&
                scene.getMeshByName("sphere1-" + trownOne).intersectsMesh(ground, false)
            ) {
                if (!tup) {
                    tup = true;
                    const music1 = new BABYLON.Sound(
                        "Music",
                        "mixkit-ball-bouncing-in-the-ground-2077.wav",
                        scene,
                        null, {
                            loop: false,
                            autoplay: true,
                        }
                    );
                }
            } else {
                tup = false;
            }
            if (
                scene.getMeshByName("sphere1-" + trownOne) &&
                scene.getMeshByName("sphere1-" + trownOne).intersectsMesh(board, false)
            ) {
                if (!bTup) {
                    bTup = true;
                    const music2 = new BABYLON.Sound(
                        "Music",
                        "mixkit-basketball-ball-hard-hit-2093.wav",
                        scene,
                        null, {
                            loop: false,
                            autoplay: true,
                        }
                    );
                }
            } else {
                bTup = false;
            }

            if (
                scene.getMeshByName("sphere1-" + trownOne) &&
                scene.getMeshByName("sphere1-" + trownOne).intersectsMesh(hoop, false)
            ) {
                if (!hTup) {
                    hTup = true;
                    const music2 = new BABYLON.Sound(
                        "Music",
                        "mixkit-sports-ball-hit-2082.wav",
                        scene,
                        null, {
                            loop: false,
                            autoplay: true,
                        }
                    );
                }
            } else {
                hTup = false;
            }

            if (
                scene.getMeshByName("sphere-" + trownOne) &&
                scene
                .getMeshByName("sphere-" + trownOne)
                .intersectsMesh(hitboxGoalCheckEnter, false)
            ) {
                if (last != 0) {
                    last = curent;
                }
                curent = 1;
            }
            if (
                scene.getMeshByName("sphere-" + trownOne) &&
                scene
                .getMeshByName("sphere-" + trownOne)
                .intersectsMesh(hitboxGoalCheckExit, false)
            ) {
                last = curent;
                curent = 2;
                if (last == 1 && curent == 2) {
                    if (scoreArray[scoreArray.length - 1]) {
                        if (trownOne == scoreArray[scoreArray.length - 1] + 1) {
                            combo += 1;
                        } else {
                            combo = 0;
                        }
                    }

                    score = score + combo + 1;
                    scoreArray.push(trownOne);

                    animation.stop();
                    animation.start(false, 1, 20, 120);
                    const music = new BABYLON.Sound(
                        "Music",
                        "net_sound.mp3",
                        scene,
                        null, {
                            loop: false,
                            autoplay: true,
                        }
                    );
                    if (timer != 0) {
                        timer += 1;
                    }

                    drawScore();
                }
            }
        }
    });

    return scene;
};
window.initFunction = async function() {
    globalThis.HK = await HavokPhysics();
    // await Ammo();
    var asyncEngineCreation = async function() {
        try {
            return createDefaultEngine();
        } catch (e) {
            console.log(
                "the available createEngine function failed. Creating the default engine instead"
            );
            return createDefaultEngine();
        }
    };

    window.engine = await asyncEngineCreation();
    if (!engine) throw "engine should not be null.";
    startRenderLoop(engine, canvas);
    window.scene = createScene();
};
initFunction().then(() => {
    sceneToRender = scene;
});

// Resize
window.addEventListener("resize", function() {
    engine.resize();
});
