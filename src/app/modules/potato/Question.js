/**
 * @author: Joseph Gefroh
 */
(function() {
    function QuestionController($location) {
        var vm = this;
        var questions = [
            {
                question: 'Have you ever been mashed into paste in a bowl?',
                onYes: fail,
                onNo: pass
            },
            {
                question: 'Do you ever feel like you\'re too round and lumpy?',
                yesText: 'Yes, sometimes.',
                noText: 'Never.',
                onYes: fail,
                onNo: pass
            },
            {
                question: 'Are you a spud or a stud?',
                yesText: 'Spud',
                noText: 'Stud',
                onYes: fail,
                onNo: pass
            },
            {
                question: 'You\'ve fallen on the ground. What do you do?',
                yesText: 'Get up.',
                noText: 'Roll around and stay there.',
                onYes: pass,
                onNo: fail
            },
            {
                question: 'Did Irish people stop eating you for about 7 years during the mid 1800\'s?',
                onYes: fail,
                onNo: pass
            },
            {
                question: 'Have you ever jumped into a container of boiling water?',
                onYes: fail,
                onNo: pass
            },
            {
                question: 'Which drink would you make: vodka or rum?',
                yesText: 'Vodka',
                noText: 'Rum',
                onYes: fail,
                onNo: pass
            },
            {
                question: 'Have your friends ever described you as "tuberous" or "starchy"?',
                onYes: fail,
                onNo: pass
            },
            {
                question: 'Do you own any of the following: blue shoes, large oval eyes, a large nose, a detachable moustache, large pink ears?',
                onYes: fail,
                onNo: pass
            },
            {
                question: 'Do you watch a lot of television?',
                onYes: fail,
                onNo: pass
            },
            {
                question: 'Did you grow up in a house or underground?',
                yesText: 'In a house',
                noText: 'Underground',
                onYes: pass,
                onNo: fail
            },
            {
                question: 'Have you ever had a disease called "Phytophtora infestans"?',
                onYes: fail,
                onNo: pass
            },
            {
                question: 'If you were a potato chip, what would be your life goal?',
                yesText: 'I\'m not a potato chip.',
                noText: 'Be crunchy.',
                onYes: pass,
                onNo: fail
            },
            {
                question: 'Have you ever powered a genocidal artificial intelligence through uncontrolled chemical processes?',
                onYes: fail,
                onNo: pass
            }
        ];
        vm.currentQuestion = null;

        newQuestion();
        function newQuestion() {
            if (questions.length > 0) {
                currentQuestion = questions[0];
                questions.splice(0, 1);
            }
            else {
                $location.path('/notapotato')
            }
        }

        vm.onYes = function() {
            currentQuestion.onYes();
        };

        vm.onNo = function() {
            currentQuestion.onNo();
        };

        vm.getYesText = function() {
            return currentQuestion.yesText ? currentQuestion.yesText : "Yes";
        };

        vm.getNoText = function() {
            return currentQuestion.noText ? currentQuestion.noText : "No";
        };


        function fail() {
            $location.path('/potato');
        }

        function pass() {
            newQuestion();
        }

        vm.getQuestion = function() {
            return currentQuestion.question;
        };
    }
    angular
        .module('AreYouAPotato.PotatoModule')
        .controller('QuestionController', ['$location', QuestionController]);
})();